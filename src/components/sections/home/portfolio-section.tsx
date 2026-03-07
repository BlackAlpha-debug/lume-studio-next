"use client";
import PortfolioCard from "@/components/portfolio-card";
import { PORTFOLIO_CONTENT, MORE_PROJECTS } from "@/content/portfolio";
import { ArrowRight, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ScrollView } from "@/components/scroll-view";

export default function PortfolioSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      className="py-16 md:py-32 bg-gray-50 dark:bg-transparent"
      id="portfolio"
    >
      <div className="mx-auto max-w-5xl space-y-12 px-6">
        <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-semibold">
            Featured Projects
          </h2>
          <p className="max-w-sm sm:ml-auto">
            From full-stack web apps to AI-powered solutions — a selection of
            projects delivering real results for real clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {PORTFOLIO_CONTENT.map((item, index) => (
            <div key={index} className={index % 2 === 1 ? "md:mt-20" : ""}>
              <PortfolioCard card={item} />
            </div>
          ))}
        </div>

        {/* Explore More Projects Button */}
        <div className="mt-20">
          <button
            onClick={() => setShowMore(!showMore)}
            className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950 cursor-pointer"
          >
            <span className="text-foreground text-base">
              {showMore ? "Show Less" : "Explore More Projects"}
            </span>
            <span className="dark:border-background block h-8 w-1 border-l bg-white dark:bg-zinc-700"></span>
            <div className="bg-background group-hover:bg-muted size-8 overflow-hidden rounded-full duration-500">
              {showMore ? (
                <ChevronUp className="m-auto size-4 mt-2" />
              ) : (
                <ChevronDown className="m-auto size-4 mt-2" />
              )}
            </div>
          </button>
        </div>

        {/* More Projects Grid */}
        {showMore && (
          <div className="mt-12 space-y-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
            <h3 className="text-2xl font-semibold text-center">
              More Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MORE_PROJECTS.map((project, index) => (
                <ScrollView key={index}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group block rounded-xl border bg-card p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-primary/20"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          {project.category}
                        </span>
                        <h4 className="mt-1 text-lg font-semibold group-hover:text-primary transition-colors">
                          {project.name}
                        </h4>
                      </div>
                      {project.url !== "#" && (
                        <ExternalLink className="size-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                      )}
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground line-clamp-3">
                      {project.description}
                    </p>
                  </a>
                </ScrollView>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
