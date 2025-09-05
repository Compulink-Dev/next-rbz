"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CorporateGovernance() {
  const [tab, setTab] = useState("directors");

  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Corporate Governance
      </h1>

      <Tabs value={tab} onValueChange={setTab} className="w-full">
        {/* Tab Buttons */}
        <TabsList className="grid grid-cols-3 w-full max-w-2xl mx-auto mb-8">
          <TabsTrigger value="directors">Board of Directors</TabsTrigger>
          <TabsTrigger value="committee">Monetary Policy Committee</TabsTrigger>
          <TabsTrigger value="management">Executive Management</TabsTrigger>
        </TabsList>

        {/* Board of Directors */}
        <TabsContent value="directors">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Dr John Mushayavanhu, Governor & Chairman",
              "Mrs Matilda Dzumbunu, Deputy Chairperson",
              "Dr Jesimen T. Chipika, Deputy Governor",
              "Dr Innocent Matshe, Deputy Governor",
              "Mr Edwin Manikai",
              "Mrs Emma Fundira",
              "Dr Caleb Fundanga",
              "Ms Belinda Muswaka",
              "Prof Jerry Parwada",
            ].map((name, i) => (
              <Card key={i} className="shadow-md rounded-2xl">
                <Image
                  src="/placeholder-profile.png"
                  alt={name}
                  width={400}
                  height={300}
                  className="w-full h-40 object-cover rounded-t-2xl"
                />
                <CardHeader>
                  <CardTitle className="text-lg">{name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Monetary Policy Committee */}
        <TabsContent value="committee">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Dr John Mushayavanhu, Governor & Chairman",
              "Dr Jesimen T. Chipika, Deputy Governor",
              "Dr Innocent Matshe, Deputy Governor",
              "Prof Albert Makochekanwa",
              "Mr Persistence Elison Gwanyanya",
              "Prof Daniel Makina",
              "Dr Charity C. Jinya",
              "Mrs Mathilda Dzumbunu",
              "Prof Ashok Chakravarti",
            ].map((name, i) => (
              <Card key={i} className="shadow-md rounded-2xl">
                <Image
                  src="/placeholder-profile.png"
                  alt={name}
                  width={400}
                  height={300}
                  className="w-full h-40 object-cover rounded-t-2xl"
                />
                <CardHeader>
                  <CardTitle className="text-lg">{name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Executive Management */}
        <TabsContent value="management">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Dr John Mushayavanhu, Governor",
              "Dr Jesimen T. Chipika, Deputy Governor",
              "Dr Innocent Matshe, Deputy Governor",
              "Dr Moris B. Mpofu, Executive Assistant/Advisor",
              "Dr Nebson Mupunga, Director Economic Research",
              "Mr Azvinandaa Saburi, Director Banking Ops",
              "Mr Farai Masendu, Director Financial Surveillance",
              "Mrs Virginia Sithole, Bank Secretary & General Counsel",
              "Mr Philip T. Madamombe, Director Banking Supervision",
              "Mr Cleopas Chiketa, Director HR",
              "Mr Joseph Mverecha, Director Policy & Strategy",
              "Mrs Melody Harry, Director Corporate Affairs",
              "Mr Never Nyemudzo, Director Finance & Stores",
              "Mr Ernest Matiza, Director Financial Markets",
              "Dr Tayengwa Chitauro, Director Capital Flows",
              "Mr Clever Haparari, Director ICT & Fintechs",
            ].map((name, i) => (
              <Card key={i} className="shadow-md rounded-2xl">
                <Image
                  src="/placeholder-profile.png"
                  alt={name}
                  width={400}
                  height={300}
                  className="w-full h-40 object-cover rounded-t-2xl"
                />
                <CardHeader>
                  <CardTitle className="text-lg">{name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
