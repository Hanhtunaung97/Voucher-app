import { create } from "zustand";

const useSaleRecordStore = create((set) => ({
  records: [],
  addSaleRecord: (record) =>
    set((state) => ({ records: [...state.records, record] })),
  removeSaleRecord: (id) =>
    set((state) => ({
      records: state.records.filter(
        (record) => record.product_id !== id
      ),
    })),
  changeQuantity: (id, quantity) =>
    set((state) => ({
      records: state.records.map((record) => {
        if (record.product_id === id) {
          const newQuantity =
            parseInt(record.quantity) + parseInt(quantity);
          const newCost = parseFloat(record.product.price) * newQuantity;
          return {
            ...record,
            quantity: newQuantity,
            cost: newCost,
          };
        }
        return record;
      }),
    })),
  resetSaleRecord: () => set((state) => ({ records: [] })),
}));

export default useSaleRecordStore;

