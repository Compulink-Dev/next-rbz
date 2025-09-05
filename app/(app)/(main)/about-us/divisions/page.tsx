"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const divisions = [
  {
    id: "secretary",
    title: "Bank Secretary & General Counsel",
    description: (
      <>
        <p>
          The division comprises three units: Bank Secretariat, General Counsel,
          and Communications & Corporate Affairs.
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Producing accurate, timely stakeholder reports</li>
          <li>Providing legal and compliance advice</li>
          <li>Coordinating Board of Directors’ meetings</li>
          <li>Ensuring good governance practices</li>
          <li>Building the Bank’s corporate image</li>
        </ul>
      </>
    ),
  },
  {
    id: "supervision",
    title: "Bank Supervision",
    description: (
      <>
        <p>
          Responsible for promoting financial stability through regulation and
          supervision of banking institutions.
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Registration of banking institutions</li>
          <li>Off-site surveillance & on-site examinations</li>
          <li>Promoting corporate governance & risk management</li>
          <li>Taking prompt supervisory action against weak banks</li>
        </ul>
      </>
    ),
  },
  {
    id: "research",
    title: "Economic Research & Policy",
    description: (
      <>
        <p>
          Undertakes macroeconomic research and policy formulation to ensure
          price and financial stability.
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Domestic Statistics & Analysis</li>
          <li>International Economics</li>
          <li>Policy Research, Modelling & Publications</li>
        </ul>
      </>
    ),
  },
  {
    id: "exchange",
    title: "Exchange Control",
    description: (
      <>
        <p>
          Administers Exchange Control regulations and manages capital flows.
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Licensing and compliance of dealers & bureaus</li>
          <li>Monitoring foreign trade data</li>
          <li>Fighting illicit financial flows</li>
          <li>Managing balance of payments stability</li>
        </ul>
      </>
    ),
  },
  {
    id: "markets",
    title: "Financial Markets",
    description: (
      <>
        <p>
          Ensures efficient management of reserves, payment systems, and capital
          markets.
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Banking Operations</li>
          <li>Money & Capital Markets</li>
          <li>International Banking & Portfolio Management</li>
          <li>National Payment Systems</li>
        </ul>
      </>
    ),
  },
  {
    id: "hr",
    title: "Human Resources & Administration",
    description: (
      <>
        <p>
          Provides support services including HR, technical, and security
          functions.
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Talent acquisition & development</li>
          <li>Staff wellness & welfare</li>
          <li>Facilities & logistics</li>
          <li>Physical security of assets</li>
        </ul>
      </>
    ),
  },
];

export default function Divisions() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Page Header */}
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Divisions
      </motion.h1>

      <motion.p
        className="text-center text-muted-foreground max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Explore the key divisions of the Reserve Bank. Switch between tabs to
        view details.
      </motion.p>

      {/* Tabs */}
      <Tabs defaultValue={divisions[0].id} className="w-full">
        <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
          {divisions.map((division) => (
            <TabsTrigger key={division.id} value={division.id}>
              {division.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {divisions.map((division, index) => (
          <TabsContent key={division.id} value={division.id}>
            <motion.div
              key={division.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>{division.title}</CardTitle>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  {division.description}
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
