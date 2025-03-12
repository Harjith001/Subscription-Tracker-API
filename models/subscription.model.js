import mongoose from "mongoose";

const subscriptionSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Subscription name is required'],
        trim: true,
        minLength: 2,
        maxLength: 100,
    },
    price:{
        type: Number,
        required: [true, 'Subs price is required'],
        min: [0, 'Price must be greater than zero'],

    },
    currency:{
        type: String,
        enum: ['USD', 'INR', 'EUR'],
        default: 'INR',
    },
    frequency:{
        type: String,
        enum: ['daily','weekly','monthly','yearly']
    },
    category:{
        type: String,
        enum: ['sports','entertainment','health','technology','finanace'],
        required : [true, 'Category is required']
    },
    status:{
        type: String,
        enum: ['active','cancelled','expired'],
        default: 'active'
    },
    startDate: {
        type: Date,
        required: true,
        validate: {
            validator: (value)=> value<= new Date(), message: 'Start Date must be in the past'
        }
    },
    renewalDate: {
        type: Date,
        validate: {
            validator: function (value){
                return value > this.startDate;
            },
            message: 'Renewal Date must be in future'
        }
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    }
}, { timestamps: true });


//Auto calc renewal date when missing
subscriptionSchema.pre('save', function(next){
    if(!this.renewalDate){
        const renewalPeriod = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365
        };

        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriod[this.frequency]);
    }

    if(this.renewalDate < new Date){
        this.status = 'expired';
    }

    next();
});


const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;