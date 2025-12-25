import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { products } from "@/pages/Products";
import emailjs from "@emailjs/browser";
import { AnimatedSection } from "./ui/AnimatedSection";

export const QuoteForm = () => {
    const { toast } = useToast();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        product_type: "",
        quantity: "",
        message: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email";
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
        if (!formData.product_type) newErrors.product_type = "Please select a product type";
        if (!formData.quantity.trim()) newErrors.quantity = "Quantity is required";
        if (!formData.message.trim()) newErrors.message = "Message is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setIsLoading(true);
            try {
                const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
                const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
                const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

                emailjs.init(PUBLIC_KEY);

                // Send main quote request
                await emailjs.send(
                    SERVICE_ID,
                    TEMPLATE_ID,
                    {
                        to_email: "renukapackaging18@gmail.com",
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        product_type: formData.product_type,
                        quantity: formData.quantity,
                        message: formData.message,
                    }
                );

                // Send auto-reply (optional, doesn't block success if it fails)
                const AUTO_REPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
                if (AUTO_REPLY_TEMPLATE_ID) {
                    try {
                        await emailjs.send(
                            SERVICE_ID,
                            AUTO_REPLY_TEMPLATE_ID,
                            {
                                name: formData.name,
                                email: formData.email,
                                title: formData.product_type,
                            }
                        );
                    } catch (autoReplyError) {
                        console.warn("Auto-reply failed to send:", autoReplyError);
                    }
                }

                setIsSubmitted(true);
                toast({
                    title: "Request Sent",
                    description: "Your quote request has been submitted successfully."
                });
            } catch (error) {
                console.error("EmailJS Error:", error);
                const errorMessage = error instanceof Error ? error.message : "Unknown error";
                toast({
                    variant: "destructive",
                    title: "Submission Error",
                    description: `Failed to send request: ${errorMessage}. Please check your EmailJS configuration.`
                });
            } finally {
                setIsLoading(false);
            }
        }
    };

    if (isSubmitted) {
        return (
            <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Request Sent!</h2>
                <p className="text-muted-foreground mb-6">Thank you. We will get back to you with a quote shortly.</p>
                <Button onClick={() => setIsSubmitted(false)}>Send Another Request</Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="name" className="text-base font-medium mb-2 block">Full Name</Label>
                    <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={`h-12 ${errors.name ? "border-destructive" : ""}`} />
                    {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
                </div>
                <div>
                    <Label htmlFor="email" className="text-base font-medium mb-2 block">Email Address</Label>
                    <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={`h-12 ${errors.email ? "border-destructive" : ""}`} />
                    {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="phone" className="text-base font-medium mb-2 block">Phone Number</Label>
                    <Input id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={`h-12 ${errors.phone ? "border-destructive" : ""}`} />
                    {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="product_type" className="text-base font-medium mb-2 block">Product Type</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, product_type: value })}>
                        <SelectTrigger className={`h-12 ${errors.product_type ? "border-destructive" : ""}`}>
                            <SelectValue placeholder="Select a product" />
                        </SelectTrigger>
                        <SelectContent>
                            {products.map((p) => (
                                <SelectItem key={p.id} value={p.name}>
                                    {p.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.product_type && <p className="text-sm text-destructive mt-1">{errors.product_type}</p>}
                </div>
                <div>
                    <Label htmlFor="quantity" className="text-base font-medium mb-2 block">Quantity Required</Label>
                    <Input id="quantity" value={formData.quantity} onChange={(e) => setFormData({ ...formData, quantity: e.target.value })} className={`h-12 ${errors.quantity ? "border-destructive" : ""}`} />
                    {errors.quantity && <p className="text-sm text-destructive mt-1">{errors.quantity}</p>}
                </div>
            </div>


            <div>
                <Label htmlFor="message" className="text-base font-medium mb-2 block">Additional Message</Label>
                <Textarea id="message" rows={6} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={errors.message ? "border-destructive" : ""} />
                {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
            </div>
            <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold" disabled={isLoading}>
                {isLoading ? (
                    <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                    </>
                ) : (
                    "Submit Quote Request"
                )}
            </Button>
        </form>
    );
};
