"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Edit, Plus, Trash2, MoreVertical, ImageIcon } from "lucide-react";
import Image from "next/image";

// Mock service data
const initialServices = [
  { 
    id: 1, 
    name: "Single Session", 
    description: "One-time tattoo removal session for small to medium tattoos.", 
    price: 150, 
    image: "/images/services/single-session.jpg",
    featured: true
  },
  { 
    id: 2, 
    name: "Package of 3 Sessions", 
    description: "Recommended for most tattoos. Includes 3 removal sessions with 6-8 weeks between each session.", 
    price: 400, 
    image: "/images/services/package-three.jpg",
    featured: true
  },
  { 
    id: 3, 
    name: "Package of 5 Sessions", 
    description: "Best value for stubborn or colorful tattoos. Includes 5 removal sessions.", 
    price: 600, 
    image: "/images/services/package-five.jpg",
    featured: true
  },
  { 
    id: 4, 
    name: "Free Consultation", 
    description: "Meet with our experts to discuss your tattoo removal options and get a personalized plan.", 
    price: 0, 
    image: "/images/services/consultation.jpg",
    featured: false
  },
];

type Service = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  featured: boolean;
};

export default function ServicesAdmin() {
  const [services, setServices] = useState<Service[]>(initialServices);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentService, setCurrentService] = useState<Service | null>(null);
  const [newService, setNewService] = useState<Omit<Service, "id">>({
    name: "",
    description: "",
    price: 0,
    image: "",
    featured: false,
  });

  const handleAddService = () => {
    const id = Math.max(0, ...services.map((s) => s.id)) + 1;
    setServices([...services, { id, ...newService }]);
    setIsAddDialogOpen(false);
    setNewService({ name: "", description: "", price: 0, image: "", featured: false });
  };

  const handleEditService = () => {
    if (!currentService) return;
    
    setServices(
      services.map((s) => 
        s.id === currentService.id ? currentService : s
      )
    );
    setIsEditDialogOpen(false);
    setCurrentService(null);
  };

  const handleDeleteService = () => {
    if (!currentService) return;
    
    setServices(
      services.filter((s) => s.id !== currentService.id)
    );
    setIsDeleteDialogOpen(false);
    setCurrentService(null);
  };

  const openEditDialog = (service: Service) => {
    setCurrentService(service);
    setIsEditDialogOpen(true);
  };

  const openDeleteDialog = (service: Service) => {
    setCurrentService(service);
    setIsDeleteDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Services</h1>
          <p className="text-muted-foreground">
            Manage tattoo removal services offered on your website.
          </p>
        </div>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Service
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <Card key={service.id} className="overflow-hidden">
            <div className="aspect-video relative bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              {service.image ? (
                <Image 
                  src={service.image} 
                  alt={service.name} 
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              ) : (
                <ImageIcon className="h-12 w-12 text-gray-400" />
              )}
              {service.featured && (
                <div className="absolute top-2 right-2 bg-[#fddb24] text-black text-xs font-medium px-2 py-1 rounded">
                  Featured
                </div>
              )}
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold">{service.name}</h3>
                <div className="text-lg font-bold text-[#fddb24]">
                  {service.price === 0 ? "Free" : `$${service.price}`}
                </div>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {service.description}
              </p>
              <div className="flex justify-end space-x-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => openEditDialog(service)}
                >
                  <Edit className="h-4 w-4 mr-1" /> Edit
                </Button>
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={() => openDeleteDialog(service)}
                >
                  <Trash2 className="h-4 w-4 mr-1" /> Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add Service Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add New Service</DialogTitle>
            <DialogDescription>
              Add a new tattoo removal service to your website.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Service Name
              </label>
              <Input
                id="name"
                value={newService.name}
                onChange={(e) =>
                  setNewService({ ...newService, name: e.target.value })
                }
                placeholder="e.g., Single Session"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="description" className="text-sm font-medium">
                Description
              </label>
              <Textarea
                id="description"
                value={newService.description}
                onChange={(e) =>
                  setNewService({ ...newService, description: e.target.value })
                }
                placeholder="Describe the service..."
                rows={3}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label htmlFor="price" className="text-sm font-medium">
                  Price ($)
                </label>
                <Input
                  id="price"
                  type="number"
                  min={0}
                  value={newService.price}
                  onChange={(e) =>
                    setNewService({
                      ...newService,
                      price: parseFloat(e.target.value) || 0,
                    })
                  }
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="image" className="text-sm font-medium">
                  Image Path
                </label>
                <Input
                  id="image"
                  value={newService.image}
                  onChange={(e) =>
                    setNewService({ ...newService, image: e.target.value })
                  }
                  placeholder="/images/services/..."
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="featured"
                checked={newService.featured}
                onChange={(e) =>
                  setNewService({
                    ...newService,
                    featured: e.target.checked,
                  })
                }
                className="h-4 w-4 rounded border-gray-300 text-[#fddb24] focus:ring-[#fddb24]"
              />
              <label
                htmlFor="featured"
                className="text-sm font-medium leading-none"
              >
                Feature this service on the homepage
              </label>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddService}>Add Service</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Service Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Edit Service</DialogTitle>
            <DialogDescription>
              Make changes to the service details.
            </DialogDescription>
          </DialogHeader>
          {currentService && (
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <label htmlFor="edit-name" className="text-sm font-medium">
                  Service Name
                </label>
                <Input
                  id="edit-name"
                  value={currentService.name}
                  onChange={(e) =>
                    setCurrentService({
                      ...currentService,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="edit-description" className="text-sm font-medium">
                  Description
                </label>
                <Textarea
                  id="edit-description"
                  value={currentService.description}
                  onChange={(e) =>
                    setCurrentService({
                      ...currentService,
                      description: e.target.value,
                    })
                  }
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="edit-price" className="text-sm font-medium">
                    Price ($)
                  </label>
                  <Input
                    id="edit-price"
                    type="number"
                    min={0}
                    value={currentService.price}
                    onChange={(e) =>
                      setCurrentService({
                        ...currentService,
                        price: parseFloat(e.target.value) || 0,
                      })
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="edit-image" className="text-sm font-medium">
                    Image Path
                  </label>
                  <Input
                    id="edit-image"
                    value={currentService.image}
                    onChange={(e) =>
                      setCurrentService({
                        ...currentService,
                        image: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="edit-featured"
                  checked={currentService.featured}
                  onChange={(e) =>
                    setCurrentService({
                      ...currentService,
                      featured: e.target.checked,
                    })
                  }
                  className="h-4 w-4 rounded border-gray-300 text-[#fddb24] focus:ring-[#fddb24]"
                />
                <label
                  htmlFor="edit-featured"
                  className="text-sm font-medium leading-none"
                >
                  Feature this service on the homepage
                </label>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleEditService}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this service? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          {currentService && (
            <div className="py-4 border-t border-b my-4">
              <p className="font-medium">{currentService.name}</p>
              <p className="text-sm text-muted-foreground mt-1">
                {currentService.description}
              </p>
              <p className="text-sm font-medium mt-2">
                Price: ${currentService.price}
              </p>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteService}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
