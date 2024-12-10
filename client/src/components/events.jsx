import * as React from "react"
import { Card, CardContent,CardDescription,CardFooter,CardHeader,CardTitle, } from "@/components/ui/card"
import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious,} from "@/components/ui/carousel"
import { Label } from "@/components/ui/label"
import { Button } from "./ui/button"
import image from "@/assets/dale.jpg.webp"
import {Drawer,DrawerClose,DrawerContent,DrawerDescription,DrawerFooter,DrawerHeader,DrawerTitle,DrawerTrigger,} from "@/components/ui/drawer"
  
export function Events() { 
  return (

    <Carousel opts={{ align: "start",}} className="w-full mt-7 relative">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
                <Card className=" bg-slate-400">
                    <CardHeader>
                      <CardTitle>Create project</CardTitle>
                      <CardDescription>Deploy your new project in one-click.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <span>
                      <img src={image} alt="Description of the image" />
                      </span>
                      
                      <div className="flex flex-col text-left font-thin text-lg text-red">
                        <span>date</span>
                        <span>Fee</span>
                      </div>
                      
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">Register</Button>
                      <Drawer className='min-h-full'>
                        <DrawerTrigger  className="bg-white text-sm font-mono min-w-24 min-h-9 rounded-lg">View</DrawerTrigger>
                        <DrawerContent>
                          <DrawerHeader>
                            <DrawerTitle>Project Title</DrawerTitle>
                            <DrawerDescription>This action cannot be undone.</DrawerDescription>
                          </DrawerHeader>
                          <span>
                            <img src={image} alt="Description of the image" />
                          </span>
                          <span className="text-center font-mono font-extrabold text-2xl">Description</span>
                          <span className="text-center font-mono text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti et, nulla optio, laboriosam repellendus impedit similique sed laudantium, incidunt iure cupiditate sit aliquid cumque. Rerum modi expedita veritatis! Et, tenetur.</span>
                          <div className="font-mono text-xl text-cyan-400 flex flex-col space-x-8 space-y-4">
                            <h5></h5>
                            <h5>Date</h5>

                            <h5>Time</h5>
                            <h5>Fee</h5>
                            <h5>Coordinator</h5>
                            <h5></h5>
                          </div>

                          <DrawerFooter className="flex flex-row justify-between">
                            <Button className="text-center pl-6 pr-6">Register</Button>
                            <DrawerClose>
                              <Button>Cancel</Button>
                            </DrawerClose>
                          </DrawerFooter>
                        </DrawerContent>
                      </Drawer>
                      
                    </CardFooter>
                </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2  md:left-4"/>
      <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2  md:right-4"/>
    </Carousel>
  )
}
