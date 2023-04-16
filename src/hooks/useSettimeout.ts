const useSettimeout = (time: number, callback: Function) => {
  setTimeout(callback, time);
};

export default useSettimeout;
