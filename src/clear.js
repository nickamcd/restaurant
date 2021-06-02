const clear = () => {
  let content = document.getElementById('content');

  content.removeChild(content.childNodes[2]);

  console.log("clearing");
};

export default clear;