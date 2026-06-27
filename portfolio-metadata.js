// Metadata about all Portfolio projects
export const projects = [
    {
        id: "source-csharp",
        title: "Source C#",
        thumbnail: "projects/source-csharp/thumb.png",
        tagline: "Modified version of Valve's 2013 Source SDK that adds C# Scripting support.",
        body: "A Modified version of Valve's 2013 Source SDK that adds C# Scripting support via .NET 9.0.0. Runs C# Code from the C++ Engine through a modular 'Scripting Backend' which defaults to a .NET Runtime Host system that allows for developing with absolutely any .NET and C# version.",
    },
    {
        id: "tweety-lang",
        title: "TweetyLang",
        thumbnail: "projects/tweety-lang/thumb.png",
        tagline: "Native programming language designed around the philosophy of tools that Just Work.",
        body: "A native programming language designed around the philosophy of tools that Just Work. It aims to bridge the gap between the developer experience of a high-level language like C# and the control of low-level languages like C. It's design was influenced by the 4 major pillars of Developer Experience, Portability, Memory Safety, and Language Interoperability.",
    },
    {
        id: "source-rewrite",
        title: "Source Rewrite",
        thumbnail: "projects/source-rewrite/thumb.png",
        tagline: "Semi-rewrite of Valve's Source Engine in C#.",
        body: "A semi-rewrite of Valve's 'Source Engine' in C#. It was designed to have the same workflow and structure as Source whilst drastically changing certain parts to be easier to use and remove various limitations of working with Source. As of the time of writing, it includes the following features:",
    },
    {
        id: "netleaf",
        title: "NetLeaf",
        thumbnail: "projects/netleaf/thumb.png",
        tagline: "C++ library that simplifies embedding C# into native applications.",
        body: "A C++ Library that heavily simplifies the process of running/embedding C# in a C++ app. Uses a .NET Runtime Host to support any .NET/C# Version whilst also having a minimal performance decrease from a native C# process. Supports static methods, return values, arguments, class instances, and more.",
    }
];