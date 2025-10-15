import { Button } from "@/components/ui/button";
import { Upload, FileText, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export const DataUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const mockUpload = (fileName: string) => {
    setUploadedFiles(prev => [...prev, fileName]);
  };

  return (
    <div className="space-y-4">
      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-accent transition-colors">
        <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
        <p className="text-sm text-muted-foreground mb-3">
          Drop CSV files or click to upload
        </p>
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => mockUpload('FOIS_data_2024.csv')}
        >
          Browse Files
        </Button>
      </div>

      {uploadedFiles.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs font-medium text-foreground">Uploaded Files:</p>
          {uploadedFiles.map((file, index) => (
            <div key={index} className="flex items-center gap-2 text-xs bg-secondary p-2 rounded">
              <CheckCircle2 className="h-3 w-3 text-success" />
              <FileText className="h-3 w-3 text-muted-foreground" />
              <span className="text-foreground flex-1">{file}</span>
            </div>
          ))}
        </div>
      )}

      <div className="space-y-1 text-xs">
        <div className="flex justify-between text-muted-foreground">
          <span>FOIS Records</span>
          <span className="font-medium text-foreground">2,847</span>
        </div>
        <div className="flex justify-between text-muted-foreground">
          <span>Stockyard Status</span>
          <span className="font-medium text-success">Active</span>
        </div>
        <div className="flex justify-between text-muted-foreground">
          <span>Last Updated</span>
          <span className="font-medium text-foreground">2 mins ago</span>
        </div>
      </div>
    </div>
  );
};
