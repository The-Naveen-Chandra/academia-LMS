"use client";

import { Ban, CheckCircleIcon, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ChapterActionsProps {
  disabled: boolean;
  courseId: string;
  chapterId: string;
  isPublished: boolean;
}

export const ChapterActions = ({
  disabled,
  courseId,
  chapterId,
  isPublished,
}: ChapterActionsProps) => {
  return (
    <div className="flex items-center gap-x-2">
      <Button
        onClick={() => {}}
        disabled={disabled}
        variant={"outline"}
        size={"sm"}
        className={cn(isPublished ? "bg-green-600 text-white" : "bg-white")}
      >
        {!isPublished ? (
          <Ban className="h-4 w-4 mr-1" />
        ) : (
          <CheckCircleIcon className="h-4 w-4 mr-1" />
        )}
        {isPublished ? "Published" : "Publish"}
      </Button>
      <Button size={"sm"}>
        <Trash className="h-4 w-4 mr-1" />
        Delete
      </Button>
    </div>
  );
};
