"use client";

import { Ban, CheckCircleIcon, Trash } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { ConfirmModal } from "@/components/modals/confirm-modal";

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
  const [isLoading, setIsLoading] = useState(false);

  const onDelete = () => {};

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
      <ConfirmModal onConfirm={() => {}}>
        <Button size={"sm"}>
          <Trash className="h-4 w-4 mr-1" />
          Delete
        </Button>
      </ConfirmModal>
    </div>
  );
};
