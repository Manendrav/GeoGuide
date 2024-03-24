import React from "react";
import Button from "../components/layout/Button";
import { Link } from "react-router-dom";
import Map from "../components/Map";


export default function Explore() {





    return (
        <div className="mapview border-2 border-red-500 max-w-6xl mx-auto p-3">
            <div className="layer"></div>

            <div className="">
                <div className="flex flex-col min-h-screen">
                    <div className="flex items-center h-16 border-b shrink-0 ">
                        <form className="flex-1 flex gap-3 ml-4 md:ml-auto md:mr-4 lg:mr-6">
                            <div className="relative p-3 px-5 flex items-center border-2 w-[40rem] rounded-full text-sm bg-gray-100 duration-200 ease-in-out">
                                <p>icon</p>
                                <input
                                    className="pl-3 w-full outline-none text-gray-500 bg-transparent text-sm duration-200 ease-in-out"
                                    placeholder="Search..."
                                    type="search"
                                />
                            </div>
                            <Button>Search</Button>
                        </form>
                    </div>
                    <main className="flex-1 flex flex-col min-h-[calc(100vh_-_theme(spacing.16))] mt-5 p-2 border-2">
                        <div className="grid relative gap-4  border-2 p-3  border-indigo-400">

                            <div className="absolute z-10 top-[40%]">
                                <div className="hidden rounded-lg border-2 border-r bg-gray-200/80 lg:block">
                                    <div className="flex h-full max-h-screen flex-col">
                                        <div className="flex items-center border-b justify-center">
                                            <Link className="flex items-center font-semibold">
                                                <p>ico</p>
                                            </Link>
                                        </div>
                                        <div className="flex-1 overflow-auto py-2">
                                            <nav className="grid items-start gap-3 px-2 text-sm font-medium">
                                                <Link className="flex items-center  rounded-lg hover:bg-gray-100 px-3 py-2 text-gray-900  transition-all ">
                                                    <p>ic</p>
                                                </Link>
                                                <Link className="flex items-center  rounded-lg hover:bg-gray-100 px-3 py-2 text-gray-900  transition-all ">
                                                    <p>ic</p>
                                                </Link>
                                                <Link className="flex items-center rounded-lg hover:bg-gray-100 px-3 py-2 text-gray-900  transition-all ">
                                                    <p>ic</p>
                                                </Link>
                                                <Link className="flex items-centerrounded-lg hover:bg-gray-100 px-3 py-2 text-gray-900  transition-all ">
                                                    <p>ic</p>
                                                </Link>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="flex flex-col gap-2 md:col-span-2 border-2 w-full">
                                <div className="rounded-xl z-[0]  h-[40rem]  overflow-hidden border-2 w-full">
                                        <Map />
                                </div>
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div>
                                        <div className="flex items-center gap-4">
                                            <p className="w-10 h-10" />
                                            <div className="grid gap-1.5">
                                                <h3 className="text-lg font-bold">Pasta Palace</h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    Italian · 0.5 mi
                                                </p>
                                            </div>
                                            <Button className="ml-auto" size="icon">
                                                <p className="w-5 h-5" />
                                                <span className="sr-only">Add to favorites</span>
                                            </Button>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-4">
                                            <p className="w-10 h-10" />
                                            <div className="grid gap-1.5">
                                                <h3 className="text-lg font-bold">Coffee Central</h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    Café · 0.3 mi
                                                </p>
                                            </div>
                                            <Button className="ml-auto" size="icon">
                                                <p className="w-5 h-5" />
                                                <span className="sr-only">Add to favorites</span>
                                            </Button>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-4">
                                            <p className="w-10 h-10" />
                                            <div className="grid gap-1.5">
                                                <h3 className="text-lg font-bold">Fuel Up</h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    Gas Station · 0.8 mi
                                                </p>
                                            </div>
                                            <Button className="ml-auto" size="icon">
                                                <p className="w-5 h-5" />
                                                <span className="sr-only">Add to favorites</span>
                                            </Button>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-4">
                                            <p className="w-10 h-10" />
                                            <div className="grid gap-1.5">
                                                <h3 className="text-lg font-bold">Fresh Market</h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    Grocery Store · 1.2 mi
                                                </p>
                                            </div>
                                            <Button className="ml-auto" size="icon">
                                                <p className="w-5 h-5" />
                                                <span className="sr-only">Add to favorites</span>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl border border-green-400">
                            <div className="aspect-video w-full" />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
