export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, notebookId = undefined) => {
  return {
    type: OPEN_MODAL,
    modal,
    notebookId
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
