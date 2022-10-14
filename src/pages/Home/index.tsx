import React, { useState } from 'react';
import { Button } from 'antd';
import reactLogo from '@/assets/react.svg';
import { useStore } from '@/store';
import { AlertOutlined } from '@ant-design/icons';
import Header from '@/components/Header';

const Home: React.FC = () => {
  const [count, setCount] = useState(0);

  const getVotes = useStore((state) => state.votes);
  const addVotes = useStore((state) => state.addVotes);
  const subtractVotes = useStore((state) => state.subtractVotes);

  return (
    <div className="grid place-content-center h-screen text-center text-lg">
      <div className="flex mx-auto items-center gap-8">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="w-28" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="w-32 animate-spin [animation-duration:10s]"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="my-20 font-semibold text-6xl">Vite + React</h1>
      <div>
        <Button
          className="inline-flex items-center rounded-md"
          size="large"
          icon={<AlertOutlined />}
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <p className="mt-4 mb-12">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="opacity-40">
        Click on the Vite and React logos to learn more
      </p>
      <Header />
      <p className="mt-5">{getVotes} People</p>
      <p>
        <Button type="primary" className="rounded-md" onClick={addVotes}>
          Case a Votes
        </Button>
        <Button type="primary" className="rounded-md" onClick={subtractVotes}>
          Delete a Votes
        </Button>
      </p>
    </div>
  );
};

export default Home;
