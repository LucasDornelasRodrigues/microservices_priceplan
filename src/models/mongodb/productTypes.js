export default {
    collection: 'ProductTypes',
    fields    :   {
        name: {
            type        : String,
            required    : true,
            index       : true
        },
        alias: {
          type: String,
          required: true,
          unique: true
        },
        isActive: {
            type        : Boolean,
            required    : true,
            default     : true,
            index       : true
        }
    },
    options   : { // Opcional
        timestamps: true
    }
};