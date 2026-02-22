import useTheme from "@hooks/useTheme.ts";
import {Button} from "@heroui/button";

export default function TheHeader() {
  const {setTheme} = useTheme();
  return (
    <div className="app-dashboard-header">
      <div className="flex items-center justify-between w-full border border-red-500 h-full">
        <div>
          <Button color="warning" onPress={() => setTheme({type: "compact"})}>
            Compact
          </Button>
        </div>
        <div>
          <Button color="primary" onPress={() => setTheme({type: "default"})}>
            Default
          </Button>
        </div>
      </div>
    </div>
  );
}
