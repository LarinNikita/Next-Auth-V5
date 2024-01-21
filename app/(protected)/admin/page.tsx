'use client';

import { toast } from "sonner";
import { UserRole } from "@prisma/client";

import { admin } from "@/actions/admin";

import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";

const AdminPage = () => {
    const onApiRouteClick = () => {
        fetch("/api/admin")
            .then((response) => {
                if (response.ok) {
                    toast.success("Allowed API Route!");
                } else {
                    toast.error("Forbidden API Route!");
                }
            });
    };

    const onServerActionClick = () => {
        admin()
            .then((data) => {
                if (data.success) {
                    toast.success("Allowed API Route!");
                }

                if (data.error) {
                    toast.error("Forbidden API Route!");
                }
            });
    };

    return (
        <Card className="w-screen max-w-screen-md shadow-md">
            <CardHeader>
                <p className="text-2xl font-semibold text-center">
                    👑 Admin
                </p>
            </CardHeader>
            <CardContent className="space-y-4">
                <RoleGate allowedRole={UserRole.ADMIN}>
                    <FormSuccess
                        message="You are allowed to see this content!"
                    />
                </RoleGate>
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                    <p className="text-sm font-medium">
                        Admin-only API Route
                    </p>
                    <Button onClick={onApiRouteClick}>
                        Click to test
                    </Button>
                </div>
                <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                    <p className="text-sm font-medium">
                        Admin-only Server Action
                    </p>
                    <Button onClick={onServerActionClick}>
                        Click to test
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default AdminPage;