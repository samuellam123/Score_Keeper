import { useEffect } from "react";
import { supabase } from "../../back-end/supabaseClient";

const App = () => {
  useEffect(() => {
    const testConnection = async () => {
      const { data, error } = await supabase.from("casino_records").select("*");
      if (error) console.error("Error fetching data:", error);
      else console.log("Casino Records:", data);
    };

    testConnection();
  }, []);

  return <div>Check console for DB connection test!</div>;
};

export default App;
