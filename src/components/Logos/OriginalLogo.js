const SvgComponent = (props) => {
  const savedColor = !props.color ? "#fffffe" : props.color;

  return (
    <svg
      className="fill-logo"
      width={!props.width ? "40px" : props.width}
      height={!props.height ? "40px" : props.height}
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 493.52 420.08"
      {...props}
    >
      <defs>
        <style>{`.fill-logo{fill:${savedColor};}`}</style>
      </defs>
      <path d="M234.08 289.97V416.3c0 1 0 2.05-.04 3.08 0 .31-.06.67-.4.7-.28.03-.61-.13-.84-.28-.53-.49-1.03-1-1.55-1.52-14.6-14.6-29.21-29.18-43.79-43.79-5.67-5.69-11.3-11.45-16.95-17.17-.72-.72-1.4-1.44-1.7-2.51-.85-3.14-.8-2.85 1.22-4.86 17.31-17.28 34.65-34.53 51.98-51.79 3.36-3.35 6.71-6.72 10.09-10.07.48-.48.86-1.17 1.74-1.16.44 1 .22 2.04.23 3.05ZM325.06 352.58c-.43 1.92-.99 3.65-2.52 5.15-8.31 8.18-16.53 16.45-24.77 24.71-11.81 11.84-23.64 23.68-35.44 35.52-.52.52-1.02 1.03-1.53 1.53-.3.27-.59.68-1.03.57-.48-.14-.4-.64-.43-1.02-.04-.52-.01-1.03-.01-1.55 0-42.64 0-85.27.01-127.91 0-.89-.3-1.83.35-2.64.84.13 1.2.81 1.7 1.3 3.39 3.32 6.76 6.67 10.13 10.04 10.95 10.92 21.93 21.86 32.89 32.8 6.21 6.18 12.43 12.39 18.64 18.58.58.59 1.16 1.19 1.73 1.78.3.33.39.73.3 1.15h-.02ZM328.13 343.34c-.23.89-.53 1.76-.76 2.68-1.26 4.77-1.08 4.44-4.5 1.02-9.33-9.35-18.68-18.69-27.98-28.08-11.29-11.34-22.53-22.71-33.8-34.08-.3-.3-.57-.58-.86-.86-.68-.59-.93-1.33-.9-2.22.01-1.65 0-3.31 0-5.23.35-1.58-.62-3.56.48-5.35 1.71.82 2.78 2.37 4.08 3.67 20.88 20.84 41.75 41.74 62.65 62.61 2.49 2.51 2.51 2.51 1.6 5.84h-.01ZM234.08 272.94v8.98c.03.75-.23 1.4-.79 1.92-.3.3-.59.59-.88.89-3.49 3.5-6.96 7.03-10.47 10.54-16.97 17.01-33.95 34.02-50.9 51.05-.95.94-1.8 1.97-2.77 2.91-.64.63-1.17.58-1.42-.22-.81-2.67-1.53-5.36-2.27-8.04-.17-.62-.03-1.21.44-1.71.5-.52.99-1.03 1.52-1.55 21.59-21.59 43.17-43.18 64.76-64.78.59-.58 1.2-1.13 1.83-1.66.32-.28.84 0 .88.43.03.4.06.81.06 1.24ZM234.08 256.48c.19 1.37-.39 2.37-1.38 3.25-.71.61-1.33 1.29-1.98 1.96-8.93 8.86-17.87 17.75-26.81 26.59-13.49 13.37-26.96 26.73-40.45 40.1-.44.43-.9.85-1.37 1.25-.3.26-.93.12-1.03-.26-.64-2.18-1.3-4.34-1.88-6.54-4.72-16.97-9.4-33.93-14.09-50.93-3.14-11.32-6.26-22.65-9.39-33.97-.15-.59-.32-1.2-.41-1.8-.08-.45.22-.81.68-.85.91-.09 1.84-.13 2.77-.13 8.14 0 16.3-.04 24.45.04 1.96.01 3.54-.45 5.08-1.73 8.43-6.96 16.9-13.86 25.35-20.79 6.94-5.69 13.91-11.34 20.86-17.03 5.42-4.43 10.87-8.86 16.31-13.31.91-.76 1.8-1.64 2.98-2.09.52.9.32 1.75.32 2.56v73.68h-.01ZM357.97 236.01c.01.5-.1 1.02-.24 1.49-1.91 6.97-3.84 13.91-5.76 20.87-2.22 8.04-4.42 16.09-6.62 24.14-2.9 10.55-5.8 21.08-8.7 31.6-1.24 4.47-2.43 8.95-3.67 13.42-.17.59-.35 1.19-.54 1.78-.13.36-.73.57-1.02.31-.7-.61-1.4-1.22-2.05-1.88-3.23-3.18-6.44-6.39-9.68-9.58-11.8-11.7-23.61-23.37-35.43-35.08-7.77-7.69-15.49-15.43-23.32-23.09-1.22-1.2-1.66-2.41-1.65-4.07.04-24.36.03-48.72.03-73.08 0-.71.05-1.44.13-2.15.01-.13.27-.22.46-.35.23.15.53.28.75.46 4.42 3.58 8.8 7.19 13.19 10.77 7.51 6.13 15.03 12.26 22.55 18.4 8.55 6.98 17.08 13.98 25.64 20.97 1.28 1.04 2.56 2.07 3.83 3.14.9.77 1.92 1.1 3.12 1.07 2.9-.05 5.78-.01 8.68-.01h17.64c.72.01 1.44.05 2.14.18.23.04.53.44.53.68ZM422.38 211.6c-1.07 0-1.57.04-2.07-.03-3.29-.31-6.57-.62-9.86-.98-2.34-.23-4.72-.52-7.07-.73-3.07-.27-6.16-.5-9.24-.8-2.98-.27-5.95-.61-8.91-.91-2.37-.26-4.72-.54-7.09-.76-5.22-.5-10.46-.93-15.69-1.44-3.09-.3-6.15-.66-9.24-.99-2.14-.24-4.3-.46-6.44-.67-5.35-.48-10.68-.98-16.04-1.42-1.49-.12-2.73-.67-3.93-1.57-10.18-7.74-20.41-15.45-30.62-23.14-10.96-8.26-21.94-16.52-32.89-24.77-1.91-1.42-3.8-2.82-5.69-4.26-.77-.59-.75-1.11.06-1.74 2.4-1.79 4.79-3.56 7.21-5.33 10.36-7.67 20.73-15.37 31.13-23 3.16-2.31 2.31-2.36 5.39.05 8.5 6.72 17.03 13.41 25.47 20.21 1.48 1.2 2.94 1.62 4.79 1.62 13.31-.05 26.63-.05 39.95-.04 4.14 0 3.2-.46 5.44 2.89 14.56 21.68 29.08 43.38 43.6 65.06.52.76.99 1.56 1.75 2.76h-.01ZM445.89 213.96c-.35.84-1.06.36-1.61.3-2.56-.22-5.13-.22-7.7-.68-.99-.17-1.66-.53-2.23-1.38-2.72-4.12-5.49-8.22-8.23-12.34-5.86-8.73-11.74-17.46-17.59-26.19-6.84-10.19-13.66-20.38-20.45-30.58-.52-.76-1.19-1.44-1.3-2.36.36-.43.76-.41 1.17-.41 2.36 0 4.74.05 7.11-.04 1.4-.05 2.32.45 3.07 1.61 1.89 2.95 3.88 5.84 5.84 8.76 13.4 20.05 26.8 40.09 40.21 60.15.4.59.81 1.19 1.2 1.8.26.41.76.8.52 1.37ZM493.51 218.81c-1.39.5-2.83.13-4.24 0-3.29-.31-6.57-.68-9.84-1.03-3.49-.37-6.98-.72-10.45-1.07-2.37-.24-4.73-.46-7.1-.68-3.17-.3-6.35-.55-9.55-.84-.52-.03-1.03-.06-1.53-.15-.85-.14-1.57-.45-2.02-1.26-.24-.44-.58-.85-.88-1.28-9.69-14.62-19.39-29.23-29.09-43.84-5.59-8.44-11.17-16.86-16.75-25.3-.46-.68-.86-1.4-1.28-2.11-.18-.33.15-.85.55-.89.41-.03.84-.05 1.24-.05h46.16c.72 0 1.44.04 2.15 0 1.31-.12 2.07.46 2.67 1.62 2.59 5.04 5.24 10.06 7.9 15.07 7.18 13.6 14.34 27.2 21.5 40.8 3.31 6.31 6.6 12.61 9.88 18.92.32.63.81 1.22.67 2.1ZM441.89 5.43c.08.75-.33 1.24-.68 1.75-7.92 11.71-15.85 23.4-23.77 35.11-4.75 7.02-9.46 14.04-14.21 21.05-2.94 4.37-5.94 8.68-8.82 13.08-.82 1.28-1.84 1.83-3.32 1.79-2.07-.06-4.14-.01-6.18-.06-.8 0-1.13-.63-.76-1.24.37-.63.77-1.24 1.16-1.83 7.54-11.23 15.07-22.47 22.6-33.69 7.11-10.64 14.18-21.28 21.3-31.94.27-.43.62-.81.84-1.29.85-1.82 2.24-2.5 4.24-2.42 1.42.05 2.86-.3 4.3-.39 1.11-.06 2.23-.3 3.32.08h-.02ZM491.78 4.55c-6.54 12.72-13.17 25.44-19.78 38.16-5.68 10.96-11.34 21.98-17.12 32.9-2.09 3.94-.95 3.36-5.62 3.36-16.49.03-33.01.03-49.5 0-.99 0-2.02.24-3.16-.35.64-1.03 1.22-2 1.84-2.94 13.53-20.23 27.04-40.45 40.57-60.69 1.89-2.82 3.81-5.63 5.64-8.49.8-1.26 1.79-1.79 3.27-1.91 6.38-.52 12.73-1.16 19.08-1.74 3.29-.3 6.57-.52 9.87-.81 3.26-.3 6.54-.64 9.82-.98.93-.08 1.86-.18 2.8-.21 1.2 0 2.43-.36 3.63.1.3 1.46-.76 2.45-1.35 3.58v.02ZM108.9 78.46c-.4.04-.81.08-1.24.09h-3.4c-1.33-.01-2.67 0-4.02-.01-.64 0-1.19-.26-1.57-.81-.68-1.04-1.4-2.04-2.09-3.07-4.61-6.94-9.24-13.91-13.87-20.86-6.96-10.47-13.91-20.92-20.9-31.38-3.32-4.96-6.67-9.91-10-14.88-.39-.61-.76-1.22-1.11-1.84-.18-.33.21-.91.57-.89 2.89.18 5.77.35 8.64.53.76.06 1.39.36 1.82 1 .44.7.9 1.38 1.37 2.06 10.09 15.07 20.16 30.16 30.25 45.23 4.93 7.37 9.88 14.7 14.83 22.07.4.59.79 1.21 1.17 1.83.21.33-.08.88-.45.93ZM234.9 70.74c-1.38 1.07-2.77 2.14-4.19 3.17-11.79 8.72-23.56 17.42-35.35 26.11-.33.24-.68.46-.99.72-.55.43-1.11.5-1.7.06-.49-.39-.98-.75-1.48-1.13-8.4-6.49-16.81-13-25.21-19.5-.4-.32-.85-.59-1.21-.94-.75-.66-1.61-.85-2.58-.85-2.9.04-5.77.03-8.68.03h-28.79c-.62 0-1.24-.06-1.86 0-1.37.13-2.28-.37-3.05-1.57-2.38-3.75-4.91-7.41-7.37-11.08-12.41-18.51-24.83-37.04-37.23-55.54-.22-.35-.46-.68-.67-1.03-.32-.59-1.17-1.13-.68-1.87.37-.54 1.17-.19 1.76-.24 2.06.22 4.11.43 6.16.67 4.92.53 9.83 1.11 14.74 1.64 2.67.3 5.35.52 8 .8 3.07.33 6.16.7 9.21 1.03 2.15.24 4.32.46 6.45.71 5.63.61 11.26 1.24 16.9 1.8 4.92.52 9.86.94 14.76 1.44 3.79.39 7.58.85 11.39 1.22 1.08.1 1.93.62 2.77 1.25 2.56 1.91 5.11 3.83 7.67 5.76 18.45 13.91 36.91 27.81 55.37 41.74 1.97 1.48 3.93 3 5.86 4.53.37.27.4.75 0 1.07ZM95.31 78.38c-.82.03-1.64.03-2.47.03H43.6c-.73 0-1.46-.04-2.18-.03-.94.04-1.53-.4-1.96-1.21-.97-1.83-1.96-3.65-2.9-5.48-5.06-9.8-10.1-19.63-15.19-29.44C15.32 30.53 9.25 18.79 3.14 7.09 2.17 5.16 1.13 3.24.15 1.32c-.4-.81.03-1.4 1-1.32 3.58.32 7.18.63 10.76 1.02 2.58.26 5.13.68 7.67.97 6.56.7 13.14 1.37 19.7 2.09 2.34.26 4.69.64 7.03.93.9.1 1.53.55 2 1.29.27.43.57.86.85 1.29C60.2 23.9 71.27 40.22 82.31 56.56c4.29 6.31 8.57 12.65 12.83 18.96.3.43.58.85.85 1.29.68 1.1.5 1.52-.68 1.57ZM105.82 141.03c-.08 1.75-1.4 2.86-2.27 4.16-12.08 18.1-24.22 36.16-36.36 54.22-2.64 3.93-5.29 7.86-7.96 11.8-.35.52-.66 1.04-1.08 1.49-.26.27-.67.59-1.02.61-3.19.17-6.34.94-9.55.76-.39-.01-.64-.54-.45-.9.15-.26.32-.54.49-.8.32-.52.68-1.03 1-1.53 10.47-15.59 20.95-31.15 31.42-46.74 4.56-6.76 9.12-13.5 13.68-20.26.17-.26.32-.54.5-.77 1.75-2.42 1.16-2.28 4.21-2.28h3.03c1.29.15 2.85-.27 4.34.24h.02ZM92.37 141.01c0 1.11-.76 1.73-1.25 2.47-4.66 6.94-9.33 13.86-14 20.79-10.44 15.47-20.87 30.96-31.31 46.43-.86 1.28-1.83 2.5-2.73 3.74-1.42.22-2.82.49-4.26.66-2.46.28-4.92.52-7.37.75-5.35.48-10.68.91-16.01 1.43-4.82.46-9.62 1.02-14.44 1.53-.8.08-1.17-.4-.77-1.16 1.25-2.49 2.51-4.97 3.8-7.45 4.52-8.67 9.07-17.35 13.6-26.04 7.15-13.72 14.3-27.43 21.46-41.14.28-.55.62-1.08.93-1.6.24-.37.59-.58 1.03-.59.72-.04 1.44-.06 2.16-.06h46.43c.9 0 1.84-.13 2.73.23Z" />
      <path d="M419.56 7.48c-.54.85-1.06 1.73-1.64 2.58-12.41 18.87-24.84 37.73-37.24 56.61-2.05 3.1-4.12 6.21-6.08 9.35-.95 1.57-2.14 2.23-4.02 2.22-8.58-.08-17.15-.04-25.71-.04-4.55 0-9.08.04-13.63-.03-1.38 0-2.55.33-3.7 1.21-12.83 9.71-25.7 19.39-38.56 29.06-20.75 15.64-41.53 31.29-62.3 46.92-19.36 14.58-38.74 29.15-58.11 43.72-.5.37-1.02.72-1.48 1.13-1.61 1.44-3.43 2.05-5.62 2.16-3.08.13-6.15.62-9.21.94-2.77.3-5.54.55-8.31.82-2.98.32-5.95.67-8.93.98-2.34.26-4.7.54-7.05.76-5.02.5-10.07.94-15.09 1.46-4.72.48-9.43 1.07-14.13 1.58-2.25.27-4.51.32-6.76.66-2.86.43-5.75.53-8.62.82-2.87.3-5.73.67-8.61.98-1.02.12-2.06.17-3.09.21-.27.01-.57-.13-.89-.22.12-1.26 1-2.05 1.61-2.98 7.95-11.96 15.9-23.88 23.85-35.81 6.43-9.6 12.82-19.22 19.25-28.83 2.31-3.47 1.4-2.95 5.37-2.98h39.95c.61 0 1.24-.05 1.84 0 1.31.13 2.38-.31 3.41-1.12 2.37-1.83 4.79-3.61 7.18-5.41 9.71-7.33 19.43-14.69 29.12-22.02 13.67-10.32 27.34-20.65 41.01-30.97 9.97-7.52 19.94-15.02 29.91-22.53 17.62-13.3 35.26-26.58 52.85-39.94 1.97-1.49 4.05-2.27 6.48-2.45 3.19-.24 6.35-.72 9.53-1.07 2.46-.26 4.91-.5 7.37-.76 5.23-.58 10.45-1.19 15.68-1.74 4.51-.48 9.02-.93 13.51-1.4 2.98-.31 5.94-.7 8.9-1.06 2.06-.23 4.11-.35 6.16-.62 4.6-.62 9.21-.97 13.84-1.47 2.65-.3 5.32-.66 7.97-.95 1.12-.13 2.25-.15 3.38-.18.17 0 .33.19.62.39v.02Z" />
    </svg>
  );
};

export default SvgComponent;