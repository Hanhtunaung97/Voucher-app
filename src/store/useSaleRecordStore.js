import { create } from "zustand";

const useSaleRecordStore = create((set) => ({
  saleRecords: [],
  addSaleRecord: (saleRecord) =>
    set((state) => ({ saleRecords: [...state.saleRecords, saleRecord] })),
  removeSaleRecord: (id) =>
    set((state) => ({
      saleRecords: state.saleRecords.filter(
        (saleRecord) => saleRecord.id !== id
      ),
    })),
  changeQuantity: (id, quantity) =>
    set((state) => ({
      saleRecords: state.saleRecords.map((saleRecord) => {
        if (saleRecord.id === id) {
          const newQuantity =
            parseInt(saleRecord.quantity) + parseInt(quantity);
          const newCost = parseFloat(saleRecord.product.price) * newQuantity;
          return {
            ...saleRecord,
            quantity: newQuantity,
            cost: newCost,
          };
        }
        return saleRecord;
      }),
    })),
  resetSaleRecord: () => set((state) => ({ saleRecords: [] })),
}));

export default useSaleRecordStore;
