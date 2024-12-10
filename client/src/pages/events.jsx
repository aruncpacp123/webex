import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import image from "@/assets/dale.jpg.webp";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import Navbar from "@/components/navbar";

export default function AllEvents() {
  return (
    <>
    <Navbar />
    <div className="bg-gray-900 min-h-screen p-4">

      {/* Header */}
      <header className="text-center mb-6 mt-16">
        <h1 className="text-3xl font-bold text-white">All Events</h1>
        <p className="text-gray-400">Browse through our upcoming events</p>
      </header>

      {/* Events List */}
      <div className="space-y-6 ">
        {Array.from({ length: 10 }).map((_, index) => (
          <Card key={index} className="bg-gray-800 text-white shadow-md rounded-lg">
            <CardHeader>
              <CardTitle>Event Title {index + 1}</CardTitle>
              <CardDescription>Brief description of the event.</CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <img src={image} alt={`Event ${index + 1}`} className="rounded-lg mb-4" />
                <div className="flex flex-col space-y-2">
                  <span>Date: <span className="text-cyan-400">12th Dec 2024</span></span>
                  <span>Fee: <span className="text-green-400">Free</span></span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Register</Button>
              <Drawer>
                <DrawerTrigger className="bg-blue-500 text-white px-4 py-2 rounded-md">View Details</DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Event Title {index + 1}</DrawerTitle>
                    <DrawerDescription>Details of the event</DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4">
                    <img src={image} alt={`Event ${index + 1}`} className="rounded-lg mb-4" />
                    <p className="text-gray-300 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo et velit congue vestibulum.
                    </p>
                    <ul className="text-gray-400 space-y-2">
                      <li><strong>Date:</strong> 12th Dec 2024</li>
                      <li><strong>Time:</strong> 10:00 AM</li>
                      <li><strong>Fee:</strong> Free</li>
                      <li><strong>Coordinator:</strong> John Doe</li>
                    </ul>
                  </div>
                  <DrawerFooter className="flex justify-between">
                    <Button variant="outline">Register</Button>
                    <DrawerClose>
                      <Button>Close</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
    </>
  );
}
