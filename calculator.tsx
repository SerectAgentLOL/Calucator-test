import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function Calculator() {
  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState("");

  const handleNumber = (num: string) => {
    setDisplay(display === "0" ? num : display + num);
    setEquation(equation + num);
  };

  const handleOperator = (op: string) => {
    setDisplay("0");
    setEquation(equation + " " + op + " ");
  };

  const handleEqual = () => {
    try {
      const result = eval(equation);
      setDisplay(result.toString());
      setEquation(result.toString());
    } catch (error) {
      setDisplay("Error");
      setEquation("");
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setEquation("");
  };

  return (
    <Card className="backdrop-blur-lg bg-opacity-50 border-opacity-50">
      <CardContent className="p-6">
        <div className="bg-muted p-4 rounded-lg mb-4 text-right overflow-hidden">
          <div className="text-sm text-muted-foreground overflow-x-auto">
            {equation || "0"}
          </div>
          <div className="text-2xl font-semibold mt-1">{display}</div>
        </div>
        
        <div className="grid grid-cols-4 gap-2">
          <Button
            variant="outline"
            onClick={handleClear}
            className="col-span-2"
          >
            AC
          </Button>
          <Button
            variant="outline"
            onClick={() => handleOperator("/")}
          >
            ÷
          </Button>
          <Button
            variant="outline"
            onClick={() => handleOperator("*")}
          >
            ×
          </Button>
          
          {[7, 8, 9].map((num) => (
            <Button
              key={num}
              variant="outline"
              onClick={() => handleNumber(num.toString())}
            >
              {num}
            </Button>
          ))}
          <Button
            variant="outline"
            onClick={() => handleOperator("-")}
          >
            -
          </Button>
          
          {[4, 5, 6].map((num) => (
            <Button
              key={num}
              variant="outline"
              onClick={() => handleNumber(num.toString())}
            >
              {num}
            </Button>
          ))}
          <Button
            variant="outline"
            onClick={() => handleOperator("+")}
          >
            +
          </Button>
          
          {[1, 2, 3].map((num) => (
            <Button
              key={num}
              variant="outline"
              onClick={() => handleNumber(num.toString())}
            >
              {num}
            </Button>
          ))}
          <Button
            variant="primary"
            className="row-span-2"
            onClick={handleEqual}
          >
            =
          </Button>
          
          <Button
            variant="outline"
            onClick={() => handleNumber("0")}
            className="col-span-2"
          >
            0
          </Button>
          <Button
            variant="outline"
            onClick={() => handleNumber(".")}
          >
            .
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
