"use client";

import { useMemo, useReducer, useState } from "react";
import ControlledInput from "./ControlledInput";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { editTitle } from "../lib/helpers";
import {
  taskReducer,
  type Task,
} from "../reducers/taskReducer";

const initialTasks: Task[] = [];

export default function TaskManager() {
  const [storedTasks, setStoredTasks] = useLocalStorage<Task[]>(
    "week4-tasks",
    initialTasks
  );

  const [tasks, dispatch] = useReducer(taskReducer, storedTasks);
  const [newTask, setNewTask] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingTitle, setEditingTitle] = useState("");

  const completedCount = useMemo(
    () => tasks.filter((task) => task.completed).length,
    [tasks]
  );

  const activeCount = tasks.length - completedCount;

  function syncTasks(nextTasks: Task[]) {
    setStoredTasks(nextTasks);
  }

  function addTask() {
    const title = newTask.trim();

    if (!title) {
      return;
    }

    const task: Task = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    const nextTasks = [...tasks, task];

    dispatch({
      type: "add",
      payload: task,
    });

    syncTasks(nextTasks);
    setNewTask("");
  }

  function toggleTask(id: string) {
    const nextTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );

    dispatch({
      type: "toggle",
      payload: { id },
    });

    syncTasks(nextTasks);
  }

  function deleteTask(id: string) {
    const nextTasks = tasks.filter((task) => task.id !== id);

    dispatch({
      type: "delete",
      payload: { id },
    });

    syncTasks(nextTasks);
  }

  function startEditing(task: Task) {
    setEditingId(task.id);
    setEditingTitle(task.title);
  }

  function saveEdit(id: string) {
    const currentTask = tasks.find((task) => task.id === id);

    if (!currentTask) {
      return;
    }

    const updatedTitle = editTitle(
      currentTask.title,
      editingTitle
    );

    const nextTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, title: updatedTitle }
        : task
    );

    dispatch({
      type: "edit",
      payload: {
        id,
        title: updatedTitle,
      },
    });

    syncTasks(nextTasks);
    setEditingId(null);
    setEditingTitle("");
  }

  return (
    <section className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
      <div className="border-b border-slate-200 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 px-6 py-8 text-white sm:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              P6 — P8
            </p>

            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              Task Management
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
              Controlled inputs, local storage persistence, and
              reducer-based task management in one interface.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur">
            <p className="text-xs uppercase tracking-wider text-slate-300">
              Total Tasks
            </p>

            <p className="mt-1 text-3xl font-bold">
              {tasks.length}
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex-1">
              <ControlledInput
                value={newTask}
                onChange={setNewTask}
                placeholder="Enter a new task..."
              />
            </div>

            <button
              type="button"
              onClick={addTask}
              className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-[0.98]"
            >
              Add Task
            </button>
          </div>

          <p className="mt-2 text-xs text-slate-500">
            P6: This is a controlled input managed by React state.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Total</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">
              {tasks.length}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Active</p>
            <p className="mt-2 text-3xl font-bold text-blue-600">
              {activeCount}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-500">Completed</p>
            <p className="mt-2 text-3xl font-bold text-emerald-600">
              {completedCount}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Your Tasks
              </h3>

              <p className="text-sm text-slate-500">
                Manage your tasks below.
              </p>
            </div>

            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              P7: Persistent
            </span>
          </div>

          {tasks.length === 0 ? (
            <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 px-6 py-12 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                ✓
              </div>

              <h4 className="mt-4 font-semibold text-slate-900">
                No tasks yet
              </h4>

              <p className="mt-1 text-sm text-slate-500">
                Add your first task using the input above.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className={`rounded-2xl border p-4 transition ${
                    task.completed
                      ? "border-emerald-200 bg-emerald-50/50"
                      : "border-slate-200 bg-white hover:border-blue-200 hover:shadow-sm"
                  }`}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <button
                      type="button"
                      onClick={() => toggleTask(task.id)}
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition ${
                        task.completed
                          ? "border-emerald-500 bg-emerald-500 text-white"
                          : "border-slate-300 bg-white hover:border-blue-500"
                      }`}
                      aria-label={
                        task.completed
                          ? "Mark task as active"
                          : "Mark task as completed"
                      }
                    >
                      {task.completed ? "✓" : ""}
                    </button>

                    <div className="min-w-0 flex-1">
                      {editingId === task.id ? (
                        <div className="flex flex-col gap-2 sm:flex-row">
                          <div className="flex-1">
                            <ControlledInput
                              value={editingTitle}
                              onChange={setEditingTitle}
                              placeholder="Edit task title..."
                            />
                          </div>

                          <button
                            type="button"
                            onClick={() => saveEdit(task.id)}
                            className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
                          >
                            Save
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setEditingId(null);
                              setEditingTitle("");
                            }}
                            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <p
                          className={`break-words font-medium ${
                            task.completed
                              ? "text-slate-400 line-through"
                              : "text-slate-800"
                          }`}
                        >
                          {task.title}
                        </p>
                      )}
                    </div>

                    {editingId !== task.id && (
                      <div className="flex gap-2 sm:shrink-0">
                        <button
                          type="button"
                          onClick={() => startEditing(task)}
                          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          onClick={() => deleteTask(task.id)}
                          className="rounded-lg border border-red-100 bg-red-50 px-3 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-100"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
          <p className="text-sm font-bold text-blue-900">
            P8 — useReducer
          </p>

          <p className="mt-1 text-sm leading-6 text-blue-700">
            Add, toggle, edit, and delete operations are handled
            through the taskReducer.
          </p>
        </div>
      </div>
    </section>
  );
}
