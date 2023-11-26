"use client";

import toast from "react-hot-toast";
import { useState } from "react";
import { Ban, CheckCircleIcon, Trash } from "lucide-react";
import axios from "axios";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { ConfirmModal } from "@/components/modals/confirm-modal";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const onDelete = async () => {
    try {
      setIsLoading(true);

      await axios.delete(`/api/courses/${courseId}/chapters/${chapterId}`);

      toast.success("Chapter deleted successfully.");

      router.refresh();
      router.push(`/teacher/courses/${courseId}`);
    } catch {
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-x-2">
      <Button
        onClick={() => {}}
        disabled={disabled || isLoading}
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
      <ConfirmModal onConfirm={onDelete}>
        <Button size={"sm"} disabled={isLoading}>
          <Trash className="h-4 w-4 mr-1" />
          Delete
        </Button>
      </ConfirmModal>
    </div>
  );
};
