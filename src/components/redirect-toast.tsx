"use client";

import { useEffect } from "react";
import { toast } from "sonner";

import { deleteCookie, getCookie } from "@/actions/cookies";

export const RedirectToast = () => {
  console.log("show toast");
  useEffect(() => {
    console.log("🟢 useEffect called");

    const showToast = async () => {
      console.log("🟡 showToast function called");

      try {
        const toastMessage = await getCookie("toast");
        console.log("🟣 toastMessage:", toastMessage);

        if (toastMessage?.value) {
          console.log("🎉 Showing toast:", toastMessage.value);
          toast.success(toastMessage.value);
          await deleteCookie("toast");
          console.log("🗑️ Cookie deleted");
        } else {
          console.log("⚠️ No toast message found");
        }
      } catch (error) {
        console.error("❌ Error in showToast:", error);
      }
    };

    showToast();
  }, []);

  return null;
};
