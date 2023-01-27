import { type } from "os";

export type cardInput = {
  img: string;
  title: string;
  description: string;
  repoLink: string;
  webLink: string;
  previewList: Array<previewListObj>;
  setPreviewList: any;
  setShowModal: any;
};
export type previewListObj = { title: string; label: string; img: string };
