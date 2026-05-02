import {
  Display,
  Headline,
  Body,
  Lead,
  Large,
  Small,
  Muted,
  Technical,
  Label,
  Blockquote,
  Code,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Input,
  Textarea,
  Badge,
} from "@vix/ui/components"

export const typographyComponents = [
  {
    id: "display",
    name: "Display",
    category: "typography",
    preview: <Display size="xl">VIXION DISPLAY</Display>,
    code: `import { Display } from "@vix/ui/components"

<Display size="xl">VIXION DISPLAY</Display>`,
  },
  {
    id: "headline",
    name: "Headline",
    category: "typography",
    preview: <Headline size="md">Enterprise Neural Processing</Headline>,
    code: `import { Headline } from "@vix/ui/components"

<Headline size="md">Enterprise Neural Processing</Headline>`,
  },
  {
    id: "body",
    name: "Body",
    category: "typography",
    preview: <Body>Optimized for sub-Saharan operational frameworks.</Body>,
    code: `import { Body } from "@vix/ui/components"

<Body>Optimized for sub-Saharan operational frameworks.</Body>`,
  },
  {
    id: "lead",
    name: "Lead",
    category: "typography",
    preview: <Lead>A scalable architecture for enterprise automation.</Lead>,
    code: `import { Lead } from "@vix/ui/components"

<Lead>A scalable architecture for enterprise automation.</Lead>`,
  },
  {
    id: "large",
    name: "Large",
    category: "typography",
    preview: <Large>Neural processing at wire speed.</Large>,
    code: `import { Large } from "@vix/ui/components"

<Large>Neural processing at wire speed.</Large>`,
  },
  {
    id: "small",
    name: "Small",
    category: "typography",
    preview: <Small>Ref: CORE_SYSTEM_V4.0</Small>,
    code: `import { Small } from "@vix/ui/components"

<Small>Ref: CORE_SYSTEM_V4.0</Small>`,
  },
  {
    id: "muted",
    name: "Muted",
    category: "typography",
    preview: <Muted>Secondary information text</Muted>,
    code: `import { Muted } from "@vix/ui/components"

<Muted>Secondary information text</Muted>`,
  },
  {
    id: "technical",
    name: "Technical",
    category: "typography",
    preview: <Technical>SYS_LATENCY: 0.04ms</Technical>,
    code: `import { Technical } from "@vix/ui/components"

<Technical>SYS_LATENCY: 0.04ms</Technical>`,
  },
  {
    id: "label",
    name: "Label",
    category: "typography",
    preview: <Label>COMPONENT_LABEL</Label>,
    code: `import { Label } from "@vix/ui/components"

<Label>COMPONENT_LABEL</Label>`,
  },
  {
    id: "blockquote",
    name: "Blockquote",
    category: "typography",
    preview: <Blockquote>"Architecture is frozen music."</Blockquote>,
    code: `import { Blockquote } from "@vix/ui/components"

<Blockquote>"Architecture is frozen music."</Blockquote>`,
  },
  {
    id: "code",
    name: "Code",
    category: "typography",
    preview: <Code>const vixion = await init()</Code>,
    code: `import { Code } from "@vix/ui/components"

<Code>const vixion = await init()</Code>`,
  },
]

export const interactiveComponents = [
  {
    id: "button-default",
    name: "Button (Default)",
    category: "interactive",
    preview: <Button>Initialize</Button>,
    code: `import { Button } from "@vix/ui/components"

<Button>Initialize</Button>`,
  },
  {
    id: "button-outline",
    name: "Button (Outline)",
    category: "interactive",
    preview: <Button variant="outline">View Details</Button>,
    code: `import { Button } from "@vix/ui/components"

<Button variant="outline">View Details</Button>`,
  },
  {
    id: "button-ghost",
    name: "Button (Ghost)",
    category: "interactive",
    preview: <Button variant="ghost">Learn More</Button>,
    code: `import { Button } from "@vix/ui/components"

<Button variant="ghost">Learn More</Button>`,
  },
  {
    id: "button-sizes",
    name: "Button (Sizes)",
    category: "interactive",
    preview: (
      <div className="flex items-center gap-4">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </div>
    ),
    code: `import { Button } from "@vix/ui/components"

<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`,
  },
]

export const formComponents = [
  {
    id: "input",
    name: "Input",
    category: "form",
    preview: <Input placeholder="Enter value..." />,
    code: `import { Input } from "@vix/ui/components"

<Input placeholder="Enter value..." />`,
  },
  {
    id: "textarea",
    name: "Textarea",
    category: "form",
    preview: <Textarea placeholder="Enter description..." className="h-24" />,
    code: `import { Textarea } from "@vix/ui/components"

<Textarea placeholder="Enter description..." className="h-24" />`,
  },
  {
    id: "badge-default",
    name: "Badge (Default)",
    category: "form",
    preview: <Badge>Enterprise</Badge>,
    code: `import { Badge } from "@vix/ui/components"

<Badge>Enterprise</Badge>`,
  },
  {
    id: "badge-secondary",
    name: "Badge (Secondary)",
    category: "form",
    preview: <Badge variant="secondary">Pro</Badge>,
    code: `import { Badge } from "@vix/ui/components"

<Badge variant="secondary">Pro</Badge>`,
  },
  {
    id: "badge-outline",
    name: "Badge (Outline)",
    category: "form",
    preview: <Badge variant="outline">Standard</Badge>,
    code: `import { Badge } from "@vix/ui/components"

<Badge variant="outline">Standard</Badge>`,
  },
]

export const layoutComponents = [
  {
    id: "card",
    name: "Card",
    category: "layout",
    preview: (
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Neural Core</CardTitle>
          <CardDescription>Processing engine v4.0</CardDescription>
        </CardHeader>
        <CardContent>
          <Body className="text-sm">
            High-performance neural routing system.
          </Body>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Initialize</Button>
        </CardFooter>
      </Card>
    ),
    code: `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@vix/ui/components"

<Card>
  <CardHeader>
    <CardTitle>Neural Core</CardTitle>
    <CardDescription>Processing engine v4.0</CardDescription>
  </CardHeader>
  <CardContent>
    <Body className="text-sm">High-performance neural routing system.</Body>
  </CardContent>
  <CardFooter>
    <Button className="w-full">Initialize</Button>
  </CardFooter>
</Card>`,
  },
]

export const designComponentCategories = [
  { id: "all", label: "All Components" },
  { id: "typography", label: "Typography" },
  { id: "interactive", label: "Interactive" },
  { id: "form", label: "Form" },
  { id: "layout", label: "Layout" },
]

export const designComponents = [
  ...typographyComponents,
  ...interactiveComponents,
  ...formComponents,
  ...layoutComponents,
]
