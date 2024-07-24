

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Alert } from "@/components/ui/alert";

function MessageDisplay() {
  return (
    <div className="space-y-4">
      <Card className="bg-white shadow-md">
        <CardHeader className="border-b p-4">
          <h2 className="text-xl font-semibold text-gray-800">Message Title</h2>
        </CardHeader>
        <CardContent className="p-4">
          <p className="text-gray-600">
            This is a beautiful message displayed using the Card component with Tailwind CSS.
          </p>
        </CardContent>
      </Card>
      <Alert variant="info" className="p-4 bg-blue-100 border-l-4 border-blue-500">
        <p className="text-blue-700">
          This is an info alert message.
        </p>
      </Alert>
    </div>
  );
}

export default MessageDisplay;
