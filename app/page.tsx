import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";
import Link from "next/link";

export default function HomePage() { 
  return (
    <div className="container py-8">
      {/* === Hero Section === */}
      <section className="relative mb-16 rounded-lg bg-gray-100 p-8 text-center">
        <h1 className="mb-4 text-4xl font-bold"> 
          Find Your Style, Visually
        </h1>
        <p className="mb-6 text-lg text-muted-foreground">
          Upload a photo and let our AI find the perfect item for you.
        </p>
        
        <Button size="lg">
          <Search className="mr-2 h-5 w-5" />
          Search with an Image
        </Button>
      </section>

      {/* === Featured Products Section === */}
      <section>
        <h2 className="mb-6 text-2xl font-bold">Featured Products</h2>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          
          {/* --- Product Card 1 --- */}
          <Card>
            <CardHeader>
              <div className="aspect-square w-full rounded-md bg-gray-200 flex items-center justify-center text-gray-400">
                [Image]
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg font-medium">
                Classic White Tee
              </CardTitle>
              <p className="mt-2 text-lg font-bold">$25.00</p>
            </CardContent>
          </Card>

          {/* --- Product Card 2 --- */}
          <Card>
            <CardHeader>
              <div className="aspect-square w-full rounded-md bg-gray-200 flex items-center justify-center text-gray-400">
                [Image]
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg font-medium">
                Denim Jeans
              </CardTitle>
              <p className="mt-2 text-lg font-bold">$50.00</p>
            </CardContent>
          </Card>

           {/* --- Product Card 3 --- */}
           <Card>
            <CardHeader>
              <div className="aspect-square w-full rounded-md bg-gray-200 flex items-center justify-center text-gray-400">
                [Image]
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg font-medium">
                Leather Sneakers
              </CardTitle>
              <p className="mt-2 text-lg font-bold">$120.00</p>
            </CardContent>
          </Card>

        </div>
      </section>
    </div>
  );
}
