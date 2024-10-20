import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import { Example } from '../../../common/types/src/index';

export default function ExampleDetails() {
  const exampleId = useParams<{ id: string }>().id;
  const [example, setExample] = useState<Example | undefined>();

  const fetchExample = async (url: string, signal: AbortSignal) => {
    const response = await fetch(url, {
      signal,
    });
    if (response.ok) {
      const data = await response.json();
      setExample(data[0]);
    } else {
      console.error(`Request error: ${response.status}`);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchExampleData = async () => {
      await fetchExample(`${import.meta.env.VITE_API_URL}/example/${exampleId}`, signal);
    };
    fetchExampleData();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <Layout>
      <h1 className="text-pink-500 text-center text-2xl font-bold mt-8 mb-4 text-nowrap">{example?.example_name}</h1>
    </Layout>
  );
}
