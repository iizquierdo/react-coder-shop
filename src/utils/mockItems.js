const getItemsList = (id) => {
    return [
      { id: "1", title: "Teclado", img: "https://dummyimage.com/180x100/cfcfcf/0011ff" },
      { id: "2", title: "Mouse", img: "https://dummyimage.com/180x100/cfcfcf/0011ff" },
      {
        id: "3",
        title: "Monitor",
        img: "https://dummyimage.com/180x100/cfcfcf/0011ff"
      }
    ];
  };
  const getItemList = () => {
    return [
      { id: "1", title: "Teclado", img: "https://dummyimage.com/180x100/cfcfcf/0011ff" }
    ];
  };
  
  const itemsPromise = new Promise((rej, res) => {
    setTimeout(() => {
      rej(getItemsList("1"));
    }, 2000);
  });
  
  export const itemPromise = new Promise((rej, res) => {
    setTimeout(() => {
      rej(getItemList());
    }, 2000);
  });
  
  export default itemsPromise;
  