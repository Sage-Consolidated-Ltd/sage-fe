import React from "react";
import NotebookHeader from "./notebooks-components/NotebookHeader";
import NoteBookBody from "./notebooks-components/NoteBookBody";

const NoteBookPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <NotebookHeader />
      <NoteBookBody />
    </div>
  );
};

export default NoteBookPage;
