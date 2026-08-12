"use client";

import { useReducer, useState } from "react";
import ControlledInput from "./ControlledInput";
import { editTitle } from "@/lib/helpers";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import {
  taskReducer,
  type Task,
} from "@/reducers/taskReducer";

const initialTasks: Task[] = [
  {
    id: "1",
    title: "Learn Next.js App Router",
    completed: false,
  },
  {
    id: "2",
    title: "Practice TypeScript",
    completed: true,
  },
];

export default function Week4Practice() {
  const [title, setTitle] = useState("");

  const [savedTitle, setSavedTitle] = useLocalStorage(
    "week4-practice-title",
    ""
  );

  const [tasks, dispatch] = useReducer(
    taskReducer,
    initialTasks
  );

  function handleAddTask() {
    const newTitle = title.trim();

    if (!newTitle) return;

    dispatch({
      type: "add",
      payload: {
        id: Date.now().toString(),
        title: newTitle,
        completed: false,
      },
    });

    setTitle("");
  }

  function handleEditTask(task: Task) {
    const updatedTitle = window.prompt(
      "Enter the new task title:",
      task.title
    );

    if (updatedTitle === null) return;

    dispatch({
      type: "edit",
      payload: {
        id: task.id,
        title: editTitle(task.title, updatedTitle),
      },
    });
  }

  const completedCount = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <div className="space-y-10">
      {/* Section heading */}
      <div className="max-w-3xl">
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-8 bg-blue-600" />
          <span className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
            Interactive Lab
          </span>
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Assignment Components
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-600">
          Explore each implementation through a set of interactive
          demonstrations. Every section represents a core concept
          covered in this assignment.
        </p>
      </div>

      {/* P6 */}
      <FeatureCard
        number="06"
        title="editTitle Helper"
        subtitle="Clean and validate task titles"
        description="A reusable helper function that trims user input and safely preserves the existing value when an empty title is submitted."
      >
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          {tasks.length > 0 && (
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Current task
                </p>

                <p className="mt-1 font-semibold text-slate-900">
                  {tasks[0].title}
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleEditTask(tasks[0])}
                className="rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                Edit title
              </button>
            </div>
          )}
        </div>
      </FeatureCard>

      {/* P7 */}
      <FeatureCard
        number="07"
        title="Controlled Input"
        subtitle="React-controlled form state"
        description="The input value is controlled entirely by React state. Every keystroke updates the component state and immediately reflects in the interface."
      >
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <ControlledInput
            value={title}
            onChange={setTitle}
            placeholder="Start typing a task..."
          />

          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500">
              Live state
            </span>

            <span className="max-w-[70%] truncate text-sm font-semibold text-slate-900">
              {title || "Waiting for input..."}
            </span>
          </div>
        </div>
      </FeatureCard>

      {/* P8 */}
      <FeatureCard
        number="08"
        title="useLocalStorage"
        subtitle="Persistent client-side state"
        description="A reusable custom hook synchronizes React state with browser localStorage, allowing data to survive page refreshes."
      >
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <ControlledInput
            value={savedTitle}
            onChange={setSavedTitle}
            placeholder="Enter something to persist..."
          />

          <div className="mt-4 flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-sm font-bold text-emerald-700">
              ✓
            </span>

            <div>
              <p className="text-xs font-medium text-slate-500">
                Persistent value
              </p>

              <p className="text-sm font-semibold text-slate-900">
                {savedTitle || "No value stored yet"}
              </p>
            </div>
          </div>
        </div>
      </FeatureCard>

      {/* P9 */}
      <FeatureCard
        number="09"
        title="useReducer"
        subtitle="Centralized task state management"
        description="A reducer manages task creation, completion, editing, and deletion through predictable state transitions."
      >
        {/* Task summary */}
        <div className="mb-5 grid gap-3 sm:grid-cols-3">
          <MiniStat
            label="Total"
            value={tasks.length.toString()}
          />

          <MiniStat
            label="Completed"
            value={completedCount.toString()}
          />

          <MiniStat
            label="Pending"
            value={(tasks.length - completedCount).toString()}
          />
        </div>

        {/* Add task */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex-1">
              <ControlledInput
                value={title}
                onChange={setTitle}
                placeholder="Enter a task to add..."
              />
            </div>

            <button
              type="button"
              onClick={handleAddTask}
              disabled={!title.trim()}
              className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Add task
            </button>
          </div>
        </div>

        {/* Task list */}
        <div className="mt-5 space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 hover:shadow-md"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <div
                    className={
                      task.completed
                        ? "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-sm font-bold text-emerald-700"
                        : "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-600"
                    }
                  >
                    {task.completed ? "✓" : "•"}
                  </div>

                  <div>
                    <p
                      className={
                        task.completed
                          ? "font-semibold text-slate-400 line-through"
                          : "font-semibold text-slate-900"
                      }
                    >
                      {task.title}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      {task.completed
                        ? "Completed"
                        : "In progress"}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <TaskButton
                    onClick={() =>
                      dispatch({
                        type: "toggle",
                        payload: { id: task.id },
                      })
                    }
                  >
                    {task.completed ? "Undo" : "Complete"}
                  </TaskButton>

                  <TaskButton
                    onClick={() => handleEditTask(task)}
                  >
                    Edit
                  </TaskButton>

                  <TaskButton
                    danger
                    onClick={() =>
                      dispatch({
                        type: "delete",
                        payload: { id: task.id },
                      })
                    }
                  >
                    Delete
                  </TaskButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FeatureCard>
    </div>
  );
}

function FeatureCard({
  number,
  title,
  subtitle,
  description,
  children,
}: {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:shadow-xl hover:shadow-slate-200/60">
      <div className="border-b border-slate-100 p-6 sm:p-8">
        <div className="flex gap-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
            {number}
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Part {number}
            </p>

            <h3 className="mt-1 text-xl font-bold text-slate-950">
              {title}
            </h3>

            <p className="mt-1 text-sm font-medium text-slate-500">
              {subtitle}
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {children}
      </div>
    </article>
  );
}

function MiniStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </p>

      <p className="mt-2 text-2xl font-bold text-slate-950">
        {value}
      </p>
    </div>
  );
}

function TaskButton({
  children,
  onClick,
  danger = false,
}: {
  children: React.ReactNode;
  onClick: () => void;
  danger?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        danger
          ? "rounded-lg border border-red-200 px-3 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-50"
          : "rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
      }
    >
      {children}
    </button>
  );
}
