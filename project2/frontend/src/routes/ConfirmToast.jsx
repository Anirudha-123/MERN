import React from "react";
import { toast } from "react-toastify";

export const confirmToast = (message) => {
  return new Promise((resolve) => {
    toast(
      ({ closeToast }) => (
        <div>
          <p className="mb-2 ">{message}</p>

          <button
            className="btn btn-danger btn-sm me-2"
            onClick={() => {
              resolve(true);
              closeToast();
            }}
          >
            Yes
          </button>

          <button
            className="btn btn-secondary btn-sm"
            onClick={() => {
              resolve(false);
              closeToast();
            }}
          >
            No
          </button>
        </div>
      ),
      {
        autoClose: false,
        closeOnClick: false,
        position: "top-right",
        style: {
          marginTop: "80px",
        },
      }
    );
  });
};
