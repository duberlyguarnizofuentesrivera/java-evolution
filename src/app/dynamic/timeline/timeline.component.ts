import {Component} from '@angular/core';
import {EventItem} from "../../interfaces/event-item";


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {

  events: EventItem[];

  constructor() {
    this.events =
        [
          {
            "version": 1,
            "releaseDate": new Date("1996-01-23"),
            "summary": "The first stable release of Java, also known as Oak.",
            "supportStatus": false,
            "majorFeatures": [
              "Reflection",
              "JIT compiler",
              "Internationalization and Unicode support"
            ],
            "icon": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png",
            "color": "#E57001",
            "downloadUrl": "https://www.oracle.com/java/technologies/java-archive-downloads-javase-v1-downloads.html"
          },
          {
            "version": 2,
            "codename": "Playground",
            "releaseDate": new Date("1998-12-08"),
            "summary": "A major update that tripled the size of the Java platform to 1520 classes in 59 packages.",
            "supportStatus": false,
            "majorFeatures": [
              "Swing and Java2D",
              "Collections framework",
              "Java IDL and RMI-IIOP"
            ],
            "jepList": [
              "JSR 59"
            ],
            "icon": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png",
            "color": "#E57001",
            "downloadUrl": "https://www.oracle.com/java/technologies/java-archive-downloads-javase-v1-downloads.html"
          },
          {
            "version": 3,
            "releaseDate": new Date("2000-05-08"),
            "summary": "The first release under the Java Community Process, with improved performance and stability.",
            "supportStatus": false,
            "majorFeatures": [
              "HotSpot JVM",
              "Java Naming and Directory Interface (JNDI)",
              "Java Sound"
            ],
            "jepList": [
              "JSR 59"
            ],
            "icon": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png",
            "color": "#E57001",
            "downloadUrl": "https://www.oracle.com/java/technologies/java-archive-downloads-javase-v1-downloads.html"
          },
          {
            "version": 4,
            "releaseDate": new Date("2002-02-06"),
            "summary": "The first release to use the new versioning scheme, with significant changes to the language and libraries.",
            "supportStatus": false,
            "majorFeatures": [
              "Assertions",
              "Regular expressions",
              "XML processing (JAXP, JAXB, and SAX)",
              "Logging API"
            ],
            "jepList": [
              "JSR 59"
            ],
            "icon": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png",
            "color": "#E57001",
            "downloadUrl": "https://www.oracle.com/java/technologies/javase/jdk14-archive-downloads.html"
          },
          {
            "version": 5,
            "codename": "Tiger",
            "releaseDate": new Date("2004-09-30"),
            "summary": "A major release that added many new language features and platform enhancements.",
            "supportStatus": false,
            "majorFeatures": [
              "Generics",
              "Annotations",
              "Autoboxing/unboxing",
              "Enumerations",
              "Varargs",
              "Enhanced for loop"
            ],
            "jepList": [
              "JSR 176"
            ],
            "icon": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png",
            "color": "#E57001",
            "downloadUrl": "https://www.oracle.com/java/technologies/javase/jdk14-archive-downloads.html"
          },
          {
            "version": 6,
            "releaseDate": new Date("2006-12-11"),
            "summary": "A compatibility and performance focused release that introduced a new scripting engine and a new default garbage collector.",
            "supportStatus": false,
            "majorFeatures": [
              "Scripting Language Support (JSR 223)",
              "Java Compiler API (JSR 199)",
              "Pluggable Annotations Processing API (JSR 269)",
              "G1 garbage collector"
            ],
            "jepList": [
              "JSR 270"
            ],
            "icon": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png",
            "color": "#E57001",
            "downloadUrl": "https://www.oracle.com/java/technologies/javase/jdk14-archive-downloads.html"
          },
          {
            "version": 7,
            "releaseDate": new Date("2011-07-28"),
            "summary": "A major update that added new language features and library enhancements, as well as improved support for dynamic languages.",
            "supportStatus": false,
            "majorFeatures": [
              "Project Coin: small language changes such as diamond operator, try-with-resources, etc.",
              "InvokeDynamic bytecode instruction for dynamic languages (JSR 292)",
              "Fork/Join framework for parallel programming (JSR 166)",
              "New file I/O library (NIO.2) (JSR 203)"
            ],
            "jepList": [
              "JSR 336"
            ],
            "icon": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png",
            "color": "#E57001",
            "downloadUrl": "https://www.oracle.com/java/technologies/javase/jdk14-archive-downloads.html"
          },
          {
            "version": 8,
            "releaseDate": new Date("2014-03-18"),
            "summary": "A major release that introduced lambda expressions, streams, and functional programming concepts to the Java language and platform.",
            "supportStatus": false,
            "majorFeatures": [
              "Lambda expressions and default methods (JSR 335)",
              "Stream API for bulk data operations on collections",
              "Date and Time API (JSR 310)",
              "Nashorn JavaScript engine"
            ],
            "jepList": [
              "JSR 337"
            ],
            "icon": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png",
            "color": "#E57001",
            "downloadUrl": "https://www.oracle.com/java/technologies/javase/jdk14-archive-downloads.html"
          },
          {
            "version": 9,
            "releaseDate": new Date("2017-09-21"),
            "summary": "A major release that modularized the Java platform and introduced a new interactive shell tool.",
            "supportStatus": true,
            "majorFeatures": [
              "Java Platform Module System (Project Jigsaw) (JSR 376)",
              "JShell: The Java Shell (a Java REPL) (JEP 222)",
              "Reactive Streams (JEP 266)"
            ],
            "jepList": [
              "JSR 379"
            ],
            "icon": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png",
            "color": "#E57001",
            "downloadUrl": "https://www.oracle.com/java/technologies/javase/jdk14-archive-downloads.html"
          },
          {
            "version": 10,
            "releaseDate": new Date("2018-03-20"),
            "summary": "A minor release that added some new features and enhancements to the Java platform.",
            "supportStatus": true,
            "majorFeatures": [
              "Local-variable type inference (var keyword) (JEP 286)",
              "Application class-data sharing (JEP 310)",
              "Experimental Graal JIT compiler (JEP 317)"
            ],
            "icon": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png",
            "color": "#E57001",
            "downloadUrl": "https://www.oracle.com/java/technologies/javase/jdk14-archive-downloads.html"
          },
          {
            "version": 11,
            "releaseDate": new Date("2018-09-25"),
            "summary": "A long-term support release that added some new features and removed some deprecated components from the Java platform.",
            "supportStatus": true,
            "majorFeatures": [
              "Launch single-file source-code programs (JEP 330)",
              "Dynamic class-file constants (JEP 309)",
              "Epsilon garbage collector (JEP 318)"
            ],
            "jepList": [
              "JSR 384"
            ],
            "icon": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png",
            "color": "#E57001",
            "downloadUrl": "https://www.oracle.com/java/technologies/javase-jdk11-downloads.html"
          },
          {
            version: 12,
            releaseDate: new Date("2019-03-19"),
            summary: "A minor release that added some new features and enhancements to the Java platform.",
            "supportStatus": true,
            majorFeatures: [
              "Switch expressions (preview) (JEP 325)",
              "Shenandoah garbage collector (experimental) (JEP 189)",
              "Microbenchmark suite (JEP 230"
            ],
            "icon": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png",
            "color": "#E57001",
            "downloadUrl": "https://www.oracle.com/java/technologies/javase/jdk14-archive-downloads.html"
          },
          {
            "version": 13,
            "releaseDate": new Date("2019-09-17"),
            "summary": "A minor release that added some new features and enhancements to the Java platform.",
            "supportStatus": true,
            "majorFeatures": [
              "Text blocks (preview) (JEP 355)",
              "Dynamic CDS archives (JEP 350)",
              "ZGC: Uncommit unused memory (JEP 351)"
            ],
            "icon": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png",
            "color": "#E57001",
            "downloadUrl": "https://www.oracle.com/java/technologies/javase/jdk14-archive-downloads.html"
          },
          {
            "version": 14,
            "releaseDate": new Date("2020-03-17"),
            "summary": "A minor release that added some new features and enhancements to the Java platform.",
            "supportStatus": true,
            "majorFeatures": [
              "Switch expressions (standard) (JEP 361)",
              "Records (preview) (JEP 359)",
              "Pattern matching for instanceof (preview) (JEP 305)"
            ],
            "icon": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png",
            "color": "#E57001",
            "downloadUrl": "https://www.oracle.com/java/technologies/javase/jdk14-downloads.html"
          },
          {
            "version": 15,
            "releaseDate": new Date("2020-09-15"),
            "summary": "A minor release that added some new features and enhancements to the Java platform.",
            "supportStatus": true,
            "majorFeatures": [
              "Text blocks (standard) (JEP 378)",
              "Sealed classes (preview) (JEP 360)",
              "Hidden classes (JEP 371)"
            ],
            "icon": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png",
            "color": "#E57001",
            "downloadUrl": "https://www.oracle.com/java/technologies/javase/jdk15-archive-downloads.html"
          },
          {
            "version": 16,
            "releaseDate": new Date("2021-03-16"),
            "summary": "A minor release that added some new features and enhancements to the Java platform.",
            "supportStatus": true,
            "majorFeatures": [
              "Records (standard) (JEP 395)",
              "Pattern matching for instanceof (standard) (JEP 394)",
              "Vector API (incubator) (JEP 338)"
            ],
            "icon": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png",
            "color": "#E57001",
            "downloadUrl": "https://www.oracle.com/java/technologies/javase-jdk16-downloads.html"
          },
          {
            version: 17,
            releaseDate: new Date("2021-09-14"),
            summary: "A long-term support release that added some new features and removed some deprecated components from the Java platform.",
            "supportStatus": true,
            majorFeatures: [
              "Sealed classes (standard) (JEP 406)",
              "Pattern matching for switch expressions and statements (preview) (JEP 406)",
              "Foreign-Memory Access API (incubator) (JEP 412)"
            ],
            jepList: [
              "JSR 416"
            ],
            icon: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png",
            color: "#E57001",
            downloadUrl: "https://www.oracle.com/java/technologies/downloads/#java17"
          },
          {
            version: 20,
            releaseDate: new Date("2023-03-21"),
            summary: "A minor release that added some new features and enhancements to the Java platform.",
            "supportStatus": true,
            majorFeatures: [
              "Record patterns and array patterns (preview) (JEP 405)",
              "Object layouts (incubator) (JEP 412)",
              "Generics over primitives (incubator) (JEP 218)"
            ],
            icon: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png",
            color: "#E57001",
            downloadUrl: "https://www.oracle.com/java/technologies/downloads/#java20"
          },
          {
            version: 21,
            releaseDate: new Date("2023-09-19"),
            summary: "A long-term support release that added some new features and enhancements to the Java platform.",
            "supportStatus": true,
            majorFeatures: [
              "Pattern matching for switch expressions and statements (standard) (JEP 406)",
              "Record patterns and array patterns (standard) (JEP 405)",
              "Virtual threads (incubator) (JEP 433)"
            ],
            icon: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png",
            color: "#E57001",
            downloadUrl: "https://www.oracle.com/java/technologies/downloads/#java21"
          }
        ]

    ;
  }
}
