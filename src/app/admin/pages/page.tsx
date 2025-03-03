"use client";

import { useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, Eye, FileText, MoreVertical, Plus } from "lucide-react";

// Mock page data
const initialPages = [
  { 
    id: 1, 
    title: "Home", 
    slug: "/", 
    lastUpdated: "2023-05-15",
    sections: ["Hero", "Services", "Testimonials", "About", "Contact"]
  },
  { 
    id: 2, 
    title: "About Us", 
    slug: "/about", 
    lastUpdated: "2023-04-20",
    sections: ["Team", "History", "Mission", "Values"]
  },
  { 
    id: 3, 
    title: "Services", 
    slug: "/services", 
    lastUpdated: "2023-05-10",
    sections: ["Service List", "Pricing", "FAQ"]
  },
  { 
    id: 4, 
    title: "Contact", 
    slug: "/contact", 
    lastUpdated: "2023-03-25",
    sections: ["Contact Form", "Map", "Address"]
  },
  { 
    id: 5, 
    title: "FAQ", 
    slug: "/faq", 
    lastUpdated: "2023-04-05",
    sections: ["General Questions", "Service Questions", "Pricing Questions"]
  },
];

// Mock section content for the editor
const mockSectionContent = {
  "Hero": `<h1>Welcome to Inkless Is More</h1>
<p>Nairobi's premier laser tattoo removal studio</p>
<div class="cta-buttons">
  <button>Book Now</button>
  <button>Learn More</button>
</div>`,
  "Services": `<h2>Our Services</h2>
<div class="services-grid">
  <div class="service-card">
    <h3>Single Session</h3>
    <p>One-time tattoo removal session for small to medium tattoos.</p>
    <p class="price">$150</p>
  </div>
  <!-- More service cards -->
</div>`,
  "Testimonials": `<h2>What Our Clients Say</h2>
<div class="testimonials-slider">
  <div class="testimonial">
    <p>"The pain is nothing compared to getting a new tattoo."</p>
    <p class="author">- Faith</p>
  </div>
  <!-- More testimonials -->
</div>`,
  "About": `<h2>About Inkless Is More</h2>
<p>We are Nairobi's premier laser tattoo removal studio, dedicated to helping you remove unwanted tattoos safely and effectively.</p>
<div class="about-image">
  <img src="/images/about/studio.jpg" alt="Our Studio" />
</div>`,
  "Contact": `<h2>Get In Touch</h2>
<form>
  <input type="text" placeholder="Your Name" />
  <input type="email" placeholder="Your Email" />
  <textarea placeholder="Your Message"></textarea>
  <button type="submit">Send Message</button>
</form>`
};

type Page = {
  id: number;
  title: string;
  slug: string;
  lastUpdated: string;
  sections: string[];
};

export default function PagesAdmin() {
  const [pages, setPages] = useState<Page[]>(initialPages);
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [sectionContent, setSectionContent] = useState<string>("");
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editedPageTitle, setEditedPageTitle] = useState("");
  const [editedPageSlug, setEditedPageSlug] = useState("");

  const handleSelectPage = (page: Page) => {
    setSelectedPage(page);
    setSelectedSection(page.sections[0]);
    setSectionContent(mockSectionContent[page.sections[0] as keyof typeof mockSectionContent] || "");
  };

  const handleSelectSection = (section: string) => {
    setSelectedSection(section);
    setSectionContent(mockSectionContent[section as keyof typeof mockSectionContent] || "");
  };

  const handleSaveSectionContent = () => {
    // In a real application, this would save the content to a database
    console.log("Saving content for section:", selectedSection);
    console.log("Content:", sectionContent);
    // Show a success message
    alert("Content saved successfully!");
  };

  const handleOpenEditDialog = (page: Page) => {
    setSelectedPage(page);
    setEditedPageTitle(page.title);
    setEditedPageSlug(page.slug);
    setIsEditDialogOpen(true);
  };

  const handleSavePageDetails = () => {
    if (!selectedPage) return;
    
    const updatedPages = pages.map(page => 
      page.id === selectedPage.id 
        ? { ...page, title: editedPageTitle, slug: editedPageSlug, lastUpdated: new Date().toISOString().split('T')[0] }
        : page
    );
    
    setPages(updatedPages);
    setSelectedPage(prevPage => 
      prevPage ? { ...prevPage, title: editedPageTitle, slug: editedPageSlug, lastUpdated: new Date().toISOString().split('T')[0] } : null
    );
    setIsEditDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Pages</h1>
        <p className="text-muted-foreground">
          Manage and edit website pages.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pages List */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Website Pages</CardTitle>
              <CardDescription>
                Select a page to edit its content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {pages.map((page) => (
                  <div 
                    key={page.id} 
                    className={`p-3 rounded-lg flex justify-between items-center cursor-pointer ${
                      selectedPage?.id === page.id 
                        ? "bg-[#fddb24] text-black" 
                        : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                    onClick={() => handleSelectPage(page)}
                  >
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 mr-2" />
                      <div>
                        <div className="font-medium">{page.title}</div>
                        <div className="text-xs opacity-70">{page.slug}</div>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleOpenEditDialog(page)}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          <a href={page.slug} target="_blank" rel="noopener noreferrer">
                            View Page
                          </a>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                <Plus className="mr-2 h-4 w-4" /> Add New Page
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Page Editor */}
        <div className="lg:col-span-2">
          {selectedPage ? (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>{selectedPage.title}</CardTitle>
                    <CardDescription>
                      Last updated: {selectedPage.lastUpdated}
                    </CardDescription>
                  </div>
                  <Button onClick={() => handleOpenEditDialog(selectedPage)}>
                    <Edit className="mr-2 h-4 w-4" /> Edit Page Details
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue={selectedPage.sections[0]} value={selectedSection || undefined} onValueChange={handleSelectSection}>
                  <TabsList className="mb-4 flex flex-wrap">
                    {selectedPage.sections.map((section) => (
                      <TabsTrigger key={section} value={section}>
                        {section}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  
                  {selectedPage.sections.map((section) => (
                    <TabsContent key={section} value={section} className="space-y-4">
                      <div className="border rounded-md p-2">
                        <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs mb-2">
                          HTML Editor - {section} Section
                        </div>
                        <Textarea
                          value={sectionContent}
                          onChange={(e) => setSectionContent(e.target.value)}
                          className="font-mono text-sm"
                          rows={15}
                        />
                      </div>
                      
                      <div className="flex justify-end">
                        <Button onClick={handleSaveSectionContent}>
                          Save Changes
                        </Button>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-12">
                <FileText className="h-16 w-16 text-gray-300 dark:text-gray-600 mb-4" />
                <p className="text-muted-foreground text-center">
                  Select a page from the list to edit its content
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Edit Page Details Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Page Details</DialogTitle>
            <DialogDescription>
              Update the page title and URL slug.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="title" className="text-sm font-medium">
                Page Title
              </label>
              <Input
                id="title"
                value={editedPageTitle}
                onChange={(e) => setEditedPageTitle(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="slug" className="text-sm font-medium">
                URL Slug
              </label>
              <Input
                id="slug"
                value={editedPageSlug}
                onChange={(e) => setEditedPageSlug(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                Example: /about-us (must start with /)
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSavePageDetails}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
