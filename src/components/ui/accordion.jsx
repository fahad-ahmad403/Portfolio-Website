import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { cn } from "../../lib/utils"
import { ChevronDown } from "lucide-react"

const Accordion = (props) => (
  <AccordionPrimitive.Root type="single" collapsible {...props} />
);

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn(className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hoverable:hover:bg-gray-500/30 border-l-4 [&[data-state=open]>svg]:rotate-180 data-[state=open]:bg-gray-500/30 data-[state=open]:border-blue-600 data-[state=closed]:border-gray-500/30",
        className
      )}
      {...props}>
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all border-l-4 border-blue-600 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down data-[state=open]:bg-gray-500/30"
    {...props}>
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
