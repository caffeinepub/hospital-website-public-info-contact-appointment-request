import { Button } from "@/components/ui/button";
import { FileDown, Loader2 } from "lucide-react";
import { useState } from "react";

interface PdfExportButtonProps {
  filename?: string;
  className?: string;
}

export default function PdfExportButton({
  filename,
  className,
}: PdfExportButtonProps) {
  const [isPrinting, setIsPrinting] = useState(false);

  const handlePrint = () => {
    setIsPrinting(true);

    // Set the document title to the desired filename (browsers use this for the PDF filename)
    const originalTitle = document.title;
    if (filename) {
      document.title = filename.replace(".pdf", "");
    }

    // Small delay to allow state update to render, then print
    setTimeout(() => {
      window.print();
      // Restore original title after print dialog closes
      document.title = originalTitle;
      setIsPrinting(false);
    }, 100);
  };

  return (
    <Button
      onClick={handlePrint}
      disabled={isPrinting}
      variant="outline"
      size="sm"
      className={`gap-2 border-primary/40 text-primary hover:bg-primary/10 hover:text-primary print:hidden ${className ?? ""}`}
      aria-label="Download page as PDF"
    >
      {isPrinting ? (
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
      ) : (
        <FileDown className="h-4 w-4" aria-hidden="true" />
      )}
      {isPrinting ? "Preparing…" : "Download PDF"}
    </Button>
  );
}
