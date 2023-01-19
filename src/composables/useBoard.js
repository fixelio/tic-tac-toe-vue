import { ref } from 'vue';

const useBoard = () => {
  const board = ref(Array(9).fill(null));

  const setBoard = (newBoard) => {
    board = [...newBoard];
  }

  return {
    board,
    setBoard,
  }
}

export default useBoard;