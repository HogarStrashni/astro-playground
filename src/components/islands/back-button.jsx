import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  return (
    <button
      class="flex items-center space-x-2 rounded-md border px-5 py-2 shadow-sm"
      onClick={() => window.history.back()}
    >
      <ArrowLeft className="h-4 w-4" />
      <span>Back to all Posts</span>
    </button>
  );
};

export default BackButton;
