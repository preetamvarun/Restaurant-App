const useDisplayText = (path) => {
  let text;
  if (path === '/') {
    text = (
      <p>
        Search For Your Cravings
        <span>🍕</span>
      </p>
    );
  } else if (path === '/about') {
    text = <p>Get To Know Us !</p>;
  } else if (path === '/offers') {
    text = <p>Know what can we offer you 🏷️</p>;
  } else if (path === '/help') {
    text = <p>Welcome To Help Section 💁</p>;
  } else {
    text = '';
  }
  return text;
};

export default useDisplayText;
