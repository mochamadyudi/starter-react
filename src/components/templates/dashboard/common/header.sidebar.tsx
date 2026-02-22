interface HeaderSidebarProps {}

export default function HeaderSidebar({}: HeaderSidebarProps) {
  return (
    <div className="w-full flex items-center gap-4 border border-red-500 h-[--header-height]">
      <div>logo</div>
      <div>
        <div>PajakKu</div>
        <div></div>
      </div>
    </div>
  );
}
