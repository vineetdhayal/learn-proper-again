const useExploler = () => {
    const insertNode = (tree: any, folderId: any, item: any) => {
        if (tree.id === folderId) {
            tree.data.unshift({
                id: new Date().getTime(),
                name: item,
                isFolder: true,
                data: []
            })
            return tree;
        }
        console.log('tree', tree);

        const updatedTree = tree?.data?.map((x: any) => {
            return insertNode(x, folderId, item);
        })

        return {...tree, data: updatedTree};
    }
    return { insertNode }
}

export default useExploler;
