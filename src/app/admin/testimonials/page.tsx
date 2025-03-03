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
import { Checkbox } from "@/components/ui/checkbox";
import { Edit, MoreVertical, Plus, Star, Trash2 } from "lucide-react";

// Mock testimonial data
const initialTestimonials = [
  { id: 1, name: "Faith", quote: "The pain is nothing compared to getting a new tattoo.", featured: true, rating: 5 },
  { id: 2, name: "Stephen", quote: "It feels good to see my tattoo fading away after each treatment.", featured: true, rating: 5 },
  { id: 3, name: "Gabriel", quote: "The service is great. Trustful, fast and very professional.", featured: true, rating: 5 },
  { id: 4, name: "Isabelle", quote: "Only a few sessions and my tattoo is nearly gone. I couldn't be happier with the results.", featured: true, rating: 5 },
  { id: 5, name: "Michael", quote: "Professional staff and amazing results. Highly recommended!", featured: false, rating: 4 },
];

type Testimonial = {
  id: number;
  name: string;
  quote: string;
  featured: boolean;
  rating: number;
};

export default function TestimonialsAdmin() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState<Testimonial | null>(null);
  const [newTestimonial, setNewTestimonial] = useState<Omit<Testimonial, "id">>({
    name: "",
    quote: "",
    featured: false,
    rating: 5,
  });

  const handleAddTestimonial = () => {
    const id = Math.max(0, ...testimonials.map((t) => t.id)) + 1;
    setTestimonials([...testimonials, { id, ...newTestimonial }]);
    setIsAddDialogOpen(false);
    setNewTestimonial({ name: "", quote: "", featured: false, rating: 5 });
  };

  const handleEditTestimonial = () => {
    if (!currentTestimonial) return;
    
    setTestimonials(
      testimonials.map((t) => 
        t.id === currentTestimonial.id ? currentTestimonial : t
      )
    );
    setIsEditDialogOpen(false);
    setCurrentTestimonial(null);
  };

  const handleDeleteTestimonial = () => {
    if (!currentTestimonial) return;
    
    setTestimonials(
      testimonials.filter((t) => t.id !== currentTestimonial.id)
    );
    setIsDeleteDialogOpen(false);
    setCurrentTestimonial(null);
  };

  const openEditDialog = (testimonial: Testimonial) => {
    setCurrentTestimonial(testimonial);
    setIsEditDialogOpen(true);
  };

  const openDeleteDialog = (testimonial: Testimonial) => {
    setCurrentTestimonial(testimonial);
    setIsDeleteDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Testimonials</h1>
          <p className="text-muted-foreground">
            Manage customer testimonials displayed on your website.
          </p>
        </div>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Testimonial
        </Button>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="hidden md:table-cell">Quote</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Featured</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {testimonials.map((testimonial) => (
              <TableRow key={testimonial.id}>
                <TableCell className="font-medium">{testimonial.name}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {testimonial.quote.length > 60
                    ? `${testimonial.quote.substring(0, 60)}...`
                    : testimonial.quote}
                </TableCell>
                <TableCell>
                  <div className="flex">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#fddb24] text-[#fddb24]" />
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  {testimonial.featured ? (
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-100">
                      Featured
                    </span>
                  ) : (
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-100">
                      Regular
                    </span>
                  )}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => openEditDialog(testimonial)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => openDeleteDialog(testimonial)}
                        className="text-red-600 focus:text-red-600"
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Add Testimonial Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Testimonial</DialogTitle>
            <DialogDescription>
              Add a new customer testimonial to your website.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Customer Name
              </label>
              <Input
                id="name"
                value={newTestimonial.name}
                onChange={(e) =>
                  setNewTestimonial({ ...newTestimonial, name: e.target.value })
                }
                placeholder="Enter customer name"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="quote" className="text-sm font-medium">
                Testimonial Quote
              </label>
              <Textarea
                id="quote"
                value={newTestimonial.quote}
                onChange={(e) =>
                  setNewTestimonial({ ...newTestimonial, quote: e.target.value })
                }
                placeholder="Enter customer quote"
                rows={4}
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="rating" className="text-sm font-medium">
                Rating (1-5)
              </label>
              <Input
                id="rating"
                type="number"
                min={1}
                max={5}
                value={newTestimonial.rating}
                onChange={(e) =>
                  setNewTestimonial({
                    ...newTestimonial,
                    rating: parseInt(e.target.value) || 5,
                  })
                }
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="featured"
                checked={newTestimonial.featured}
                onCheckedChange={(checked) =>
                  setNewTestimonial({
                    ...newTestimonial,
                    featured: checked as boolean,
                  })
                }
              />
              <label
                htmlFor="featured"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Feature this testimonial on the homepage
              </label>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddTestimonial}>Add Testimonial</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Testimonial Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Testimonial</DialogTitle>
            <DialogDescription>
              Make changes to the testimonial.
            </DialogDescription>
          </DialogHeader>
          {currentTestimonial && (
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <label htmlFor="edit-name" className="text-sm font-medium">
                  Customer Name
                </label>
                <Input
                  id="edit-name"
                  value={currentTestimonial.name}
                  onChange={(e) =>
                    setCurrentTestimonial({
                      ...currentTestimonial,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="edit-quote" className="text-sm font-medium">
                  Testimonial Quote
                </label>
                <Textarea
                  id="edit-quote"
                  value={currentTestimonial.quote}
                  onChange={(e) =>
                    setCurrentTestimonial({
                      ...currentTestimonial,
                      quote: e.target.value,
                    })
                  }
                  rows={4}
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="edit-rating" className="text-sm font-medium">
                  Rating (1-5)
                </label>
                <Input
                  id="edit-rating"
                  type="number"
                  min={1}
                  max={5}
                  value={currentTestimonial.rating}
                  onChange={(e) =>
                    setCurrentTestimonial({
                      ...currentTestimonial,
                      rating: parseInt(e.target.value) || 5,
                    })
                  }
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="edit-featured"
                  checked={currentTestimonial.featured}
                  onCheckedChange={(checked) =>
                    setCurrentTestimonial({
                      ...currentTestimonial,
                      featured: checked as boolean,
                    })
                  }
                />
                <label
                  htmlFor="edit-featured"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Feature this testimonial on the homepage
                </label>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleEditTestimonial}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this testimonial? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          {currentTestimonial && (
            <div className="py-4 border-t border-b my-4">
              <p className="font-medium">{currentTestimonial.name}</p>
              <p className="text-sm text-muted-foreground mt-1">
                "{currentTestimonial.quote}"
              </p>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteTestimonial}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
