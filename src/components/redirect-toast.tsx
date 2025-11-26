"use client";

import { useEffect } from "react";
import { toast } from "sonner";

import { deleteCookie, getCookie } from "@/actions/cookies";

export const RedirectToast = () => {
  useEffect(() => {
    const showToast = async () => {
      const toastMessage = await getCookie("toast");
      console.log("toastMessage: ", toastMessage);
      if (toastMessage) {
        toast.success(toastMessage.value);
        await deleteCookie("toast");
      }
    };

    showToast();
  }, []);

  return null;
};
