import { useEffect, useState } from 'react';

const DarkMode = () => {
  const getLocalStorageTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(
    getLocalStorageTheme ? getLocalStorageTheme : 'light'
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === 'dark') {
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  return (
    <div className="relative">
      {theme === 'light' ? (
        <img
          src="https://jamescabauatan-demo-users-image.s3.ap-southeast-2.amazonaws.com/light-mode-button.png"
          alt="light mode button"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
        transition-all duration-300 ${
          theme === 'dark' ? 'opacity-0' : 'opacity-100'
        }`}
        />
      ) : (
        <img
          src="https://jamescabauatan-demo-users-image.s3.ap-southeast-2.amazonaws.com/dark-mode-button.png"
          alt="dark mode button"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
        transition-all duration-300"
        />
      )}
    </div>
  );
};

export default DarkMode;
