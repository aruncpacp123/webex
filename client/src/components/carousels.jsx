import React from 'react'
import { Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious,} from "@/components/ui/carousel"
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
import image from "@/assets/dale.jpg.webp"
export default function Carousels() {
  return (
    <Carousel opts={{ align: "start",}} className="w-full max-w-sm relative">
        <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 mt-14">
                        <Card>
                            <img src={image} alt="Description of the image" />
                        </Card>
                    </div>
                    
                </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2  md:left-4 opacity-50   "/>
        <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2  md:right-4 opacity-50"/>
    </Carousel>
  )
}
