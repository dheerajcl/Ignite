import Chat from "@/components/chat";
import Editor from "@/components/editor";
import Flashcards from "@/components/flashcard";
import DragDrop from "@/components/Im";
import Pedia from "@/components/Wiki";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { SpinnerPage } from "@/components/ui/spinner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomTooltip } from "@/components/ui/tooltip";
import { useBlocknoteEditorStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { ClientSideSuspense } from "@liveblocks/react";
import { saveAs } from "file-saver";
import { RoomProvider } from "liveblocks.config";
import Link from "next/link";
import { AlbumIcon, Download, Layers, MessagesSquareIcon, Image, Globe } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InviteCollab from "./invite-collab-modal";

const TABS = [
  {
    value: "notes",
    tooltip: "Take notes",
    icon: <AlbumIcon size={20} />,
    isNew: false,
  },
  {
    value: "chat",
    tooltip: "Chat with the pdf",
    icon: <MessagesSquareIcon size={20} />,
    isNew: false,
  },
  {
    value: "flashcards",
    tooltip: "Generate flashcards from the pdf",
    icon: <Layers size={20} />,
    isNew: false,
  },
  {
    value: "new-feature", // Define a new tab value
    tooltip: "Chat with Images", // Define a tooltip for the new tab
    icon: <Image size={20} />, // Define an icon for the new tab
    isNew: false,
  },
  {
    value: "new-feature2", // Define a new tab value
    tooltip: "Chat with Images", // Define a tooltip for the new tab
    icon: <Globe size={20} />, // Define an icon for the new tab
    isNew: false,
  },
];

// const ExploreButton = () => (
//   <Button>
//     <Link href="https://mu-llama.streamlit.app/" target="_blank">Explore more 🚀</Link>
//   </Button>
// );

const tabNames = TABS.map((tab) => tab.value);

const Sidebar = ({
  canEdit,
  username,
  isOwner,
  isVectorised,
}: {
  canEdit: boolean;
  username: string;
  isOwner: boolean;
  isVectorised: boolean;
}) => {
  const { query, push } = useRouter();
  const documentId = query?.docId as string;
  const tab = query.tab as string;

  const { editor } = useBlocknoteEditorStore();

  const handleDownloadMarkdownAsFile = async () => {
    if (!editor) return;
    const markdownContent = await editor.blocksToMarkdownLossy(editor.document);

    const blob = new Blob([markdownContent], { type: "text/markdown" });
    saveAs(blob, "notes.md");
  };

  const [activeIndex, setActiveIndex] = useState(
    tab && tabNames.includes(tab) ? tab : "notes",
  );

  useEffect(() => {
    // update activeIndex when tab changes externally (using switchSidebarTabToChat fn)
    if (tab && tabNames.includes(tab)) {
      setActiveIndex(tab);
    }
  }, [tab]);

  return (
    <div className="bg-gray-50">
      <Tabs
        value={activeIndex}
        onValueChange={(value) => {
          setActiveIndex(value);
          push(
            {
              query: {
                ...query,
                tab: value,
              },
            },
            undefined,
            { shallow: true },
          );
        }}
        defaultValue="notes"
        className="max-h-screen max-w-full overflow-hidden"
      >
        <div className="flex items-center justify-between pr-1">
          <TabsList className="h-12 rounded-md bg-gray-200">
            {TABS.map((item) => (
              <CustomTooltip content={item.tooltip} key={item.value}>
                <TabsTrigger value={item.value} className="relative">
                  {item.isNew && (
                    <div className="absolute -bottom-2 -right-2">
                      <Badge className="bg-blue-400 p-[0.05rem] text-[0.5rem] hover:bg-blue-500">
                        NEW
                      </Badge>
                    </div>
                  )}
                  {item.icon}
                </TabsTrigger>
              </CustomTooltip>
            ))}
            <div className="p-2">
            </div>
          </TabsList>
          <div className="flex items-center gap-1">
            {isOwner && <InviteCollab />}

            <div
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "ml-auto cursor-pointer border-stone-200 bg-white px-2 text-xs shadow-sm sm:border",
              )}
              onClick={handleDownloadMarkdownAsFile}
            >
              <Download size={20} />
            </div>
          </div>
        </div>

        {[
          {
            value: "notes",
            tw: "flex-1 overflow-scroll border-stone-200 bg-white sm:rounded-lg sm:border sm:shadow-lg h-[calc(100vh-3.5rem)] w-full overflow-scroll",
            children: (
              <RoomProvider
                id={`doc-${documentId}`}
                initialPresence={
                  {
                    // TODO: figure out what this is
                    // name: "User",
                    // color: "red",
                  }
                }
              >
                <ClientSideSuspense fallback={<SpinnerPage />}>
                  {() => (
                    <Editor
                      canEdit={canEdit ?? false}
                      username={username ?? "User"}
                    />
                  )}
                </ClientSideSuspense>
              </RoomProvider>
            ),
          },
          {
            value: "chat",
            tw: " p-2 pb-0 break-words border-stone-200 bg-white sm:rounded-lg sm:border sm:shadow-lg h-[calc(100vh-3.5rem)] w-full overflow-scroll ",
            children: <Chat isVectorised={isVectorised} />,
          },
          {
            value: "flashcards",
            tw: " p-2 pb-0 break-words border-stone-200 bg-white sm:rounded-lg sm:border sm:shadow-lg h-[calc(100vh-3.5rem)] w-full overflow-scroll ",
            children: <Flashcards />,
          },
          {
            value: "new-feature",
            tw: "p-2 pb-0 break-words border-stone-200 bg-white sm:rounded-lg sm:border sm:shadow-lg h/[calc(100vh-3.5rem)] w/full overflow-scroll",
            children: <DragDrop />
          },
          {
            value: "new-feature2",
            tw: "p-2 pb-0 break-words border-stone-200 bg-white sm:rounded-lg sm:border sm:shadow-lg h/[calc(100vh-3.5rem)] w/full overflow-scroll",
            children: <Pedia />
          },
        ].map((item) => (
          <TabsContent
            key={item.value}
            forceMount
            hidden={item.value !== activeIndex}
            value={item.value}
            className={item.tw}
          >
            {item.children}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
export default Sidebar;
