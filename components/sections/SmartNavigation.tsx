"use client";

import { useState, useEffect, useRef } from "react";
import { MENU_DATA, MenuItem, MenuCategory } from "@/lib/data";
import { Search, X, ChevronLeft, ChevronRight } from "lucide-react";
import {Folder, Utensils} from 'lucide-react'
// Type for search results
type SearchResult = 
  | { type: "category"; data: MenuCategory }
  | { type: "item"; data: MenuItem; categoryId: string };

export function SmartNavigation() {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  
  // Refs for horizontal scrolling
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Search logic
  useEffect(() => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const newResults: SearchResult[] = [];

    MENU_DATA.forEach((category) => {
      // Check if category matches
      if (category.title.toLowerCase().includes(query)) {
        newResults.push({ type: "category", data: category });
      }

      // Check if items match
      category.items.forEach((item) => {
        if (
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          (item.tag && item.tag.toLowerCase().includes(query))
        ) {
          newResults.push({ type: "item", data: item, categoryId: category.id });
        }
      });
    });

    setResults(newResults);
  }, [searchQuery]);

  // Smooth scroll function
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // 140px offset roughly accounts for the sticky header (height of search + pills)
      const offset = 140; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    
    // Reset search
    setSearchQuery("");
    setIsFocused(false);
  };

  // Scroll horizontal container
  const scrollHorizontal = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const categoriesResults = results.filter(r => r.type === "category");
  const itemsResults = results.filter(r => r.type === "item");

  return (
    <div id="smart-navigation" className="sticky top-0 z-[60] w-full bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 py-4">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-col gap-4">
        
        {/* Search Bar Container */}
        <div className="relative w-full z-[70]">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-[#f5f5f5]/50" />
            
            <input
              id="search-input"
              type="text"
              placeholder="Busca un plato o categoría..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)} // delay to allow clicking results
              className="w-full bg-[#111111]/80 text-[#f5f5f5] placeholder-[#f5f5f5]/40 pl-12 pr-10 py-3 rounded-full border border-white/10 focus:outline-none focus:border-[#ff7a1a]/50 focus:bg-[#111111] transition-all"
            />

            {/* Clear Button */}
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-4 text-[#f5f5f5]/50 hover:text-[#f5f5f5]"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Search Autocomplete Dropdown */}
          {isFocused && searchQuery && (
            <div className="absolute top-full left-0 w-full mt-2 bg-[#050505] border border-white/10 rounded-2xl shadow-2xl overflow-hidden max-h-[60vh] overflow-y-auto z-[80] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              {results.length === 0 ? (
                <div className="p-6 text-center text-[#f5f5f5]/50">
                  No se encontraron resultados para "{searchQuery}"
                </div>
              ) : (
                <div className="flex flex-col py-2">
                  
                  {/* Categories Group */}
                  {categoriesResults.length > 0 && (
                    <div className="mb-2">
                      <div className="px-4 py-2 text-xs font-bold text-[#ff7a1a] uppercase tracking-wider bg-white/5 flex gap-3 items-center">
                        <Folder /> Categorías
                      </div>
                      {categoriesResults.map((result, idx) => {
                        if (result.type !== "category") return null;
                        return (
                          <button
                            key={`cat-${result.data.id}-${idx}`}
                            onClick={() => scrollToId(result.data.id)}
                            className="w-full text-left px-4 py-3 hover:bg-white/10 transition-colors flex items-center gap-3 group relative z-[80]"
                          >
                            <span className="text-[#f5f5f5] font-semibold group-hover:text-[#ff7a1a] transition-colors">
                              {result.data.title}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Items Group */}
                  {itemsResults.length > 0 && (
                    <div>
                      <div className="px-4 py-2 text-xs font-bold text-[#ff7a1a] uppercase tracking-wider bg-white/5 flex gap-3 items-center">
                        <Utensils/> Platos
                      </div>
                      {itemsResults.map((result, idx) => {
                        if (result.type !== "item") return null;
                        return (
                          <button
                            key={`item-${result.data.id}-${idx}`}
                            onClick={() => scrollToId(result.data.id)}
                            className="w-full text-left px-4 py-3 hover:bg-white/10 transition-colors flex justify-between items-center group relative z-[80]"
                          >
                            <div className="flex flex-col">
                              <span className="text-[#f5f5f5] font-semibold group-hover:text-[#ff7a1a] transition-colors">
                                {result.data.name}
                              </span>
                              <span className="text-[#f5f5f5]/50 text-xs line-clamp-1">
                                {result.data.description}
                              </span>
                            </div>
                            <span className="text-[#ff7a1a] font-bold ml-4">
                              {result.data.price}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                </div>
              )}
            </div>
          )}
        </div>

        {/* Horizontal Category Navigation (Pills) */}
        <div className="relative flex items-center group">
          {/* Left Arrow (only visible on hover on desktop) */}
          <button 
            onClick={() => scrollHorizontal('left')}
            className="absolute left-0 z-[70] w-8 h-full bg-gradient-to-r from-[#050505] to-transparent opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-start text-white hover:text-[#ff7a1a] transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide py-1 w-full relative z-[60]"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {MENU_DATA.map((category) => (
              <button
                key={`pill-${category.id}`}
                onClick={() => scrollToId(category.id)}
                className="whitespace-nowrap px-5 py-2 rounded-full border border-white/10 bg-[#111111]/50 text-[#f5f5f5] text-sm font-semibold hover:border-[#ff7a1a]/50 hover:text-[#ff7a1a] hover:bg-[#111111] transition-all"
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Right Arrow (only visible on hover on desktop) */}
          <button 
            onClick={() => scrollHorizontal('right')}
            className="absolute right-0 z-[70] w-8 h-full bg-gradient-to-l from-[#050505] to-transparent opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-end text-white hover:text-[#ff7a1a] transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
}
