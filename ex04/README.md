# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## State

-컴포넌트 내부에서 관리되는 동적인 데이터 -컴포넌트의 상태를 나타내며, 변경 가능

- state가 변경되면 리액트는 자동으로 해당 컴포넌트와 자식 컴포넌트를 재렌더링함.
- useState() 훅(hook)을 통해 상태를 관리할 수 있음.
